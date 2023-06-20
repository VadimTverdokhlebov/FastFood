const fs = require('fs-extra');
const path = require('path');

const sourceDir = path.join(__dirname, 'src', 'public');
const destinationDir = path.join(__dirname, 'dist', 'public');

fs.copySync(sourceDir, destinationDir);

console.log('The public folder has been copied to dist');
