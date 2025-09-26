import { join } from 'node:path'; 
import { readFileSync } from 'node:fs'; 
 
import { currentDir } from '../utility.js'; // ..................... 1 
 
const dataFileName = join(currentDir, 'data', 'todos.json'); 
 
const dataFile = readFileSync(dataFileName, 'utf8'); // ............ 2 
const database = JSON.parse(dataFile); // .......................... 3 
export { database }; 