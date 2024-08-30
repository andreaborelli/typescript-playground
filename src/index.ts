import { log } from './main';

const title = 'Typescript PlayGround';
const author = 'by Fabio Biondi';
const version = '1.0.0';

log(`${title} ${author} ${version}` );

const a: number = 1;
console.log(a);


/* inferenza: inferenz è la possibilità di typescript di generare i tipi al nostro posto  */

let c: boolean;
c = true;

let b = 123; // bisogna evitare di usare any perchè non è una buona pratica
b = 20; // se scrivamo una stringa al posto di un numero ci da errore perchè b è stato inferito come number
console.log(b); 