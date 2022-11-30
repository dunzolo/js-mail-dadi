// 1 - Generare un numero casuale per il giocatore ed assegnarlo ad una variabile
let num_user = Math.floor(Math.random() * 5 + 1);
console.log('Punteggio giocatore:' + num_user);

// 2 - Generare un secondo numero casuale per il computer ed assegnarlo ad una variabile
let num_computer = Math.floor(Math.random() * 5 + 1);
console.log('Punteggio computer:' + num_computer);

// 3 - Controllo il punteggio
if(num_user == num_computer){
    console.log('Sia il giocatore che il computer hanno ottenuto lo stesso punteggio');
}
else if(num_user > num_computer){
    console.log('Il punteggio del giocatore è più alto di quello ottenuto dal computer');
}
else{
    console.log('Il punteggio del computer è più alto di quello ottenuto dal giocatore');
}