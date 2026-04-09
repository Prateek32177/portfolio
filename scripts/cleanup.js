import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const nodeModulesPath = path.join(rootDir, 'node_modules');
const lockFilePath = path.join(rootDir, 'package-lock.json');

console.log('[v0] Starting clean dependency installation...');

// Remove node_modules directory
if (fs.existsSync(nodeModulesPath)) {
  console.log('[v0] Removing node_modules...');
  fs.rmSync(nodeModulesPath, { recursive: true, force: true });
  console.log('[v0] node_modules removed successfully');
}

// Remove package-lock.json
if (fs.existsSync(lockFilePath)) {
  console.log('[v0] Removing package-lock.json...');
  fs.unlinkSync(lockFilePath);
  console.log('[v0] package-lock.json removed successfully');
}

// Run clean npm install
console.log('[v0] Running fresh npm install...');
try {
  execSync('npm install', { stdio: 'inherit', cwd: rootDir });
  console.log('[v0] Clean install completed successfully!');
  console.log('[v0] Next.js dev server can now start properly.');
} catch (error) {
  console.error('[v0] Error during npm install:', error.message);
  process.exit(1);
}
