const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.txt', data);
  // More awaits here...
}

main();
console.log('TEST');
