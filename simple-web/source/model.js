import { dirname, join } from 'node:path'; 
import { fileURLToPath } from 'node:url'; 
import { readFile } from 'node:fs/promises'; 
 
const currentDir = 
      dirname(dirname(fileURLToPath(import.meta.url))); // ......... 1 
const dataFileName = join(currentDir, 'data', 'todos.json'); // .... 2 
 
export async function loadList() { // .............................. 4 
    const rawData = await readFile(dataFileName, 'utf8'); // ....... 3 
    const data = JSON.parse(rawData); 
    return data.todos; 
} 
 
export async function loadItem(id) { 
    const rawData = await readFile(dataFileName, 'utf8'); 
    const data = JSON.parse(rawData); 
    return data.todos.find((el) => el._id === id); // .............. 5 
} 

 
