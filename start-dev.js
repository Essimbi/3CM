#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Development startup for SSR project
 * Starts: ng build --watch + Express SSR server
 */
async function main() {
  const distPath = path.join(process.cwd(), 'dist', '3cm-site', 'server', 'server.mjs');
  
  console.log('\n🚀 Starting SSR Development Server...\n');
  
  // Check if dist exists, if not do initial build
  if (!fs.existsSync(distPath)) {
    console.log('📦 First build required. Building Angular project...');
    try {
      execSync('ng build', { 
        cwd: process.cwd(), 
        stdio: 'inherit',
        shell: true 
      });
    } catch (err) {
      console.error('❌ Build failed');
      process.exit(1);
    }
  }
  
  console.log('\n✅ Build complete!\n');
  
  // Start ng build --watch in background
  console.log('👀 Starting watch mode...');
  const watchProcess = spawn('ng', ['build', '--watch'], {
    cwd: process.cwd(),
    stdio: 'pipe',
    shell: true,
  });
  
  // Suppress watch output, only show errors
  watchProcess.stderr?.on('data', (data) => {
    const msg = data.toString();
    // Only show critical errors, not build info
    if (msg.includes('error') || msg.includes('Error')) {
      console.log(`[Watch] ${msg}`);
    }
  });
  
  watchProcess.on('error', (err) => {
    console.error('❌ Watch process error:', err);
  });
  
  // Wait a bit then start the SSR server
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  console.log('🟢 Starting Express SSR server on http://localhost:4200\n');
  const serverPath = path.join(process.cwd(), 'dist', '3cm-site', 'server', 'server.mjs');
  
  const serverProcess = spawn('node', [serverPath], {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: true,
  });
  
  serverProcess.on('error', (err) => {
    console.error('❌ Server process error:', err);
    watchProcess.kill();
    process.exit(1);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n\n⏹  Stopping servers...');
    serverProcess.kill();
    watchProcess.kill();
    setTimeout(() => process.exit(0), 500);
  });
  
  process.on('SIGTERM', () => {
    serverProcess.kill();
    watchProcess.kill();
    process.exit(0);
  });
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});

