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


// dati in arrivo in modo asincrono, cioè non sappiamo quando arriveranno

interface User {
    id: number;
    name: string;
    username?: string; // ? indica che username è opzionale cioe non è obbligatorio
}


let user: User; // user è un tipo definito in un altro file

user = {id: 123, name: 'Andrea', username: 'bore'}; // initializziamo user con un oggetto 
user.username = 'lucas'; // non ci da errore perchè user è stato inferito come oggetto
console.log(user.name, user.username);

// Tipizzare oggetti complessi

interface User2 {
    id: number;
    name: string;
    username?: string;
    coords: Coords; 
    address?: Address; // address è opzionale
}

interface Coords {
    lat: number;
    long: number;
}

interface Address {
    street: string;
    city: string;
    postalCode: string;
}

const coordinates: Coords = { lat: 123, long: 456 }; // in questo modo possiamo riutilizzare il tipo Coords

const user2: User2 = {
    id: 1,
    name: 'Fabio',
    coords: {
        lat: 123,
        long: 456
    },
    // address: {
    //     street: 'via roma',
    //     city: 'roma',
    //     postalCode: '00100'
    // }
}

user2.address = {
    street: 'via roma',
    city: 'roma',
    postalCode: '00100'
}

console.log(user2.name, user2.coords.lat, user2.coords.long);
console.log(user2);

// Tipizzare un array


const list: User[] = [ // si può usare anche Array<User>
    {id: 1, name: 'Fabio'},
    {id: 2, name: 'Biondi'}
]; // abbiamo definito un array di oggetti di tipo User

console.log(list[0].name);