const fs = require('fs');
const path = require('path');

const brand = process.argv[2];
if (!brand) {
  console.error('Please provide a brand name.');
  process.exit(1);
}

const source = path.join(__dirname, '..', 'src', 'config', 'brands', `${brand}.json`);
const target = path.join(__dirname, '..', 'src', 'config', 'site.json');

try {
  if (!fs.existsSync(source)) {
    console.error(`Source config not found: ${source}`);
    process.exit(1);
  }

  fs.copyFileSync(source, target);
  console.log(`Successfully switched to ${brand} configuration.`);
} catch (err) {
  console.error(`Error switching configuration: ${err.message}`);
  process.exit(1);
}
