#!/bin/bash

echo "[v0] Starting clean dependency installation..."

# Remove node_modules directory
echo "[v0] Removing node_modules..."
rm -rf node_modules

# Remove package-lock.json
echo "[v0] Removing package-lock.json..."
rm -f package-lock.json

# Run clean npm install
echo "[v0] Running fresh npm install..."
npm install

echo "[v0] Clean install completed successfully!"
