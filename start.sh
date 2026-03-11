#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}[Starting API Server]${NC}"

# Start API server in background
tsx src/server.dev.ts &
API_PID=$!

# Wait for API server to be ready (check every 500ms for max 30 seconds)
echo -e "${BLUE}[Waiting for API server to start...]${NC}"
API_READY=0
for i in {0..60}; do
  if curl -s http://localhost:4000/api/test >/dev/null 2>&1; then
    echo -e "${GREEN}[✓ API Server is ready!]${NC}"
    API_READY=1
    break
  fi
  sleep 0.5
done

if [ $API_READY -eq 0 ]; then
  echo -e "${BLUE}[⚠ API Server may not be ready, but continuing...]${NC}"
fi

# Now start Angular dev server
echo -e "${BLUE}[Starting Angular Dev Server]${NC}"
ng serve

# Cleanup on exit
trap "kill $API_PID" EXIT
