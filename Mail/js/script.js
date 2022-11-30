// 1 - Creo un array contenente le email
const array_email = [
    'rossidavide108@gmail.com', 
    'boolean@boolean.com', 
    'esercizio.mail@gmail.com',
    'mail@mail.com',
    'pippo@pippo.it',
    'paperino@boolean.it'
]

// 2 - Chiedo all'utente di inserire la sua mail
// 3 - Inserisco quest'ultima all'interno di una variabile
let email_user = prompt('Inserisci la tua email');

// 4 - Controllo se la mail è presente all'interno dell'array
let flag = false;

for(let i = 0; i < array_email.length; i++){
    if(array_email[i] == email_user){
        flag = true;
    }
}

if(flag){
    console.log(`La tua email è presente nell'elenco. Puoi accedere!`)
}
else{
    console.log(`La tua email non è presente nell'elenco. NON puoi accedere!`)
}
