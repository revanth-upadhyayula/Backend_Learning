import { readFile,writeFile } from 'fs/promises';

const filePath = new URL('./prac.html',import.meta.url);
var cont = await readFile(filePath,{encoding:'utf-8'});

const data = {
    "name": "Lincon",
    "age": 38,
    "gender":"male",
    "city": "New Jersey"
}

for(const [key,value] of Object.entries(data))
{
    cont = cont.replace(`{${key}}`,value);
}
await writeFile(filePath,cont);
console.log(cont);