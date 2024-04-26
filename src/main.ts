import { Command } from "@tauri-apps/api/shell"

async function runCommand() {
  const cmd = new Command("run-python", ["-c", "print('Hello World!')"])

  cmd.stdout.on("data", (text) => console.log(`No error output: ${text}`))
  cmd.stderr.on("data", (text) => console.log(`Error output: ${text}`))

  await cmd.spawn()
}

document.body.onload = async () => await runCommand()
