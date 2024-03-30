const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js/main.js');
let fileContent = fs.readFileSync(filePath, 'utf8');

fileContent = fileContent.replace('%%EMAILJS_SERVICE_ID%%', process.env.EMAILJS_SERVICE_ID);
fileContent = fileContent.replace('%%EMAILJS_TEMPLATE_ID%%', process.env.EMAILJS_TEMPLATE_ID);
fileContent = fileContent.replace('%%EMAILJS_PUBLIC_KEY%%', process.env.EMAILJS_PUBLIC_KEY);

fs.writeFileSync(filePath, fileContent);