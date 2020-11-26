const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('C:/Users/tomoito/Documents/work/draqwalk/tsconfig.json', 'utf8'));
jsonObject.compilerOptions.jsx = 'react';

fs.writeFileSync('./tsconfig.json', JSON.stringify(jsonObject));
