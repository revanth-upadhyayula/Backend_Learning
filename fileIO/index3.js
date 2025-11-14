import { readFile,writeFile } from 'fs/promises';

const filePath = new URL('./i.txt', import.meta.url);
let contents = await readFile(filePath, { encoding: 'utf-8' });

const filePath1 = new URL('./index3.html', import.meta.url);
let cont = await readFile(filePath1, { encoding: 'utf-8' });

cont = cont.replace(`{content}`, contents); // Replace {} with contents of i.txt

await writeFile(filePath1,cont);
console.log(cont); // Output the updated HTML content