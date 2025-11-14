import { readFile,writeFile } from 'fs/promises'

const filePath = new URL('./index2.html',import.meta.url);
let contents = await readFile(filePath,{encoding:'utf-8'});

const data = {name: "Revanth Upadhyayula",
    age: 25,
    gender:"Male"
}
// console.log(contents)

for(const [key,value] of Object.entries(data))
{
    contents=contents.replace(`{${key}}`,value);
}
// console.log(contents);
 await writeFile(new URL('./newindex.html',import.meta.url),contents)
