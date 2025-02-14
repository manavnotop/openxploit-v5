const { exec } = require('child_process');
const path = require('path');

async function init(){
  console.log("Executing index.ts");
  const outDirPath = path.join(__dirname, "output");
  const p = exec(`cd ${outDirPath} && pnpm install && pnpm run build`);

  p.stdout.on('data',(data: any) => {
    console.log(data.toString());
  });

  p.stdout.on('error', (err: any) => {
    console.error("error", err.toString());
  });

  p.on('close', () => {
    console.log("Build complete");
  });

  exec(`cd .next/standalone && node server.js`);
}

init();