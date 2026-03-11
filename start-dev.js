#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

/**
 * Utility to check if a server is ready
 */
function waitForServer(host, port, timeout = 30000) {
  const startTime = Date.now();
  
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      const req = http.get(`http://${host}:${port}/api/test`, (res) => {
        clearInterval(interval);
        resolve();
      });
      
      req.on('error', () => {
        if (Date.now() - startTime > timeout) {
          clearInterval(interval);
          reject(new Error(`Timeout waiting for server on ${host}:${port}`));
        }
      });
      
      req.end();
    }, 500);
  });
}

/**
 * Start the API server first, wait for it, then start Angular dev server
 */
async function main() {
  console.log('\n🚀 Starting development servers...\n');
  
  // Start API server
  console.log('1️⃣  Starting API server on port 4000...');
  const apiServer = spawn('tsx', ['src/server.dev.ts'], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  
  apiServer.on('error', (err) => {
    console.error('❌ Failed to start API server:', err);
    process.exit(1);
  });
  
  // Wait for API server to be ready
  try {
    await waitForServer('localhost', 4000);
    console.log('✅ API server is ready!\n');
  } catch (err) {
    console.error('❌ API server failed to start:', err.message);
    apiServer.kill();
    process.exit(1);
  }
  
  // Start Angular dev server
  console.log('2️⃣  Starting Angular dev server on port 4200...');
  const ngServer = spawn('ng', ['serve'], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  
  ngServer.on('error', (err) => {
    console.error('❌ Failed to start Angular dev server:', err);
    apiServer.kill();
    process.exit(1);
  });
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n\n⏹  Stopping servers...');
    apiServer.kill();
    ngServer.kill();
    setTimeout(() => process.exit(0), 1000);
  });
  
  process.on('SIGTERM', () => {
    apiServer.kill();
    ngServer.kill();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
