const { spawn } = require("child_process");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const isWin = process.platform === "win32";
const npmCmd = isWin ? "npm.cmd" : "npm";

console.log("==========================================");
console.log("   Starting LivingCraft Fullstack App    ");
console.log("==========================================");

// Start Backend Server
const serverProcess = spawn(npmCmd, ["run", "dev"], {
  cwd: path.join(rootDir, "server"),
  stdio: "inherit",
  shell: true,
});

// Start Client Vite Dev Server
const clientProcess = spawn(npmCmd, ["run", "dev"], {
  cwd: path.join(rootDir, "client"),
  stdio: "inherit",
  shell: true,
});

const cleanup = () => {
  console.log("\nShutting down LivingCraft services...");
  try {
    serverProcess.kill();
    clientProcess.kill();
  } catch (e) {}
  process.exit(0);
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
