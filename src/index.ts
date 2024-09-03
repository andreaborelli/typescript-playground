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

// Utilizzo di class e type per la tipizzazione

/* nella maggior parte dei casi si usa interface, 
in vantaggio che in caso di compilazione pesa zero spazio di memoria 
è sono utilizzati in fase di compilazione, ma in runtime vengono perse, 
non occupano nel bundle ovvero nel js distribuito e deployato sul server */

/* le class hanno il vantaggio di poter effettivamente essere usati con il paradigma ad oggetti 
poter creare un new user, ma occuperanno più memoria, perchè durante il bundle 
una classe verrà convertita in funzione */

class User3 {
    id: number;
    name: string;
    username?: string;
    coords: Coords;
    address?: Address;
}

const user3: User3 = {id: 1, name: 'Fabio', coords: {lat: 123, long: 456}};

console.log(user3.name);

/* type può essere usato, è molto utile per combinare diversi tipi di dati insieme  */

type user4 = {
    id: number;
    name: string;
    username?: string;
    coords: Coords;
    address?: Address;
} 

const user4: user4 = {id: 1, name: 'Fabio', coords: {lat: 123, long: 456}};

console.log(user4.name);

// altro esempio di class

class User5 {
    // id: number;
    // name: string;
    constructor(public id: number, private name: string) {
        // this.id = id;
        // this.name = name;
    }
    /* private non è accessibile direttamente quando si crea un'stanza es. user5.name
     per fare in modo che questa proprietà sia visibile all'esterno dobbiamo crearla di tipo public
     */
    doSomething(){
        console.log(this.name);
    };
}
const user5: User5 = new User5(1, 'Luca'); // creiamo un'istanza di User5

console.log(user5 instanceof User5); // ci da true perchè user5 è un'istanza di User5

// altro vantaggio delle classi è quello che può accettare dei parametri

const user6: User5 = new User5(2, 'Andrea');

user6.doSomething(); // chiamo il metodo doSomething

console.log(user6.id); // con . dot sintaax accediamo alle proprietà della classe



/* typescript supporta il concetto di getter e setter si tende ad evitarli 
per avere un codice più pulito e coinciso e si usa public */

class User7 {
    constructor(public id: number, private name: string) {

    }

    get getId(): string {
        return 'ID: ' + this.id;
    }

    set setId(newId: number) {
        this.id = newId;
}
}
const user7: User7 = new User7(1, 'Luca');
user7.setId = 123; // setto il nuovo id
console.log(user7.getId); // ottengo il nuovo id



// questa non è una buona pratica, getter e settere è la soluzione più indicata
class User8 {
    constructor(public id: number, public name: string) {
    }   
}
const user8: User8 = new User8(200, 'Luca');
user7.id = 300; // setto il nuovo id
console.log(user7.id); // ottengo il nuovo id

