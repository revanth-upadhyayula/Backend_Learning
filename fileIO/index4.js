import { readFile,writeFile } from 'fs/promises';

const filePath = new URL('./index4.html',import.meta.url);
const content= await readFile(filePath,{encoding:'utf-8'});

const newContent = content.replace(`{}`,"Hello World!!");
// await writeFile(filePath,newContent);
console.log(newContent);