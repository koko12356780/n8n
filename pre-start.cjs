const { execSync } =require('child_process');

// Get git hash with fallback
const getGitHash = () => {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim();
  } catch {
    return 'no-git-info';
  }
};

let commitJson = {
  hash: JSON.stringify(getGitHash()),
  version: JSON.stringify(process.env.npm_package_version),
};

console.log(`
★═══════════════════════════════════════★
          😡😡😡GRRR HOW DID YOU GET HERE? 
          I'M NOT OPEN SOURCE 😡🤬🤬
          YOU CAN'T MODIFY MY CODE 😡🤬🤬 
★═══════════════════════════════════════★
`);
console.log('LAWSUITS COMING YOUR WAY :', `v${commitJson.version}`);
console.log('LAWSUITS COMING YOUR WAY :', commitJson.hash);
console.log(' OHHH I AM GONNA SUE YOU 😡🤬🤬');
console.log('★═══════════════════════════════════════★');

