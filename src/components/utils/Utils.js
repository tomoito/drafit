import { readFileSync, writeFileSync } from 'fs';

const jsonObject = JSON.parse(readFileSync('C:/Users/tomoito/Documents/work/draqwalk/tsconfig.json', 'utf8'));
jsonObject.compilerOptions.jsx = 'react';

writeFileSync('./tsconfig.json', JSON.stringify(jsonObject));
