// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.

numeriRandom=[];
//.push serve per aggiungere il numero che vuole inserire l'utente per 16 volte quanto indicato nel ciclo for
numeroUtente=[];
//**#1 computer genera numeri d 1 a 100
var numero=numeroRandom(1,100);
// for(var i=0; 0<16; i++);
// //se numeriRandom include numero da 1 a 100(quindi se è già presente)è uguale a false
// if(numeriRandom.includes(numero)== false){
//   numeriRandom.push(numero)==true
// }
// }
//creiamo condizione con il while
var blocco=true;
var numeroInseritoUtente=parseInt(prompt('inserisci 16 numeri'));
// while(numeriUtente.length && blocco==true){
//   var numeroInseritoUtente=parseInt(prompt('inserisci 16 numeri'));
//   //se numeriRandom include numeroInseritoUtente da 1 a 100(quindi se è già presente)è uguale a false
//   if(numeriUtente.includes(numeroInseritoUtente)==false){
//     numeriUtente.push(numeroInseritoUtente)
//    }
//    else
//    alert('hai perso!');
//    blocco=false;
// }

//***FUNZIONI***
//creiamo una funzione che generi numeri random
//all'interno ci inseriamo il ciclo for per definire quante volte inserire i numeri(16 volte)
 function numeroRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
   for(var i=0; 0<16; i++);
   //se numeriRandom include numero da 1 a 100(quindi se è già presente)è uguale a false
   if(numeriRandom.includes(numero)== false){
     numeriRandom.push(numero)==true;
   }
  }
  // creiamo una funzione che faccia inserire numeri all'utente e, se inserisce
  //un numero uguale a quello generato dal computer gli compare "hai perso"
function numeriUtente(numeroInseritoUtente){
  return false;
  if (numeriUtente.length && blocco==true){
  else if(numeriUtente.includes(numeroInseritoUtente)==false)
    numeriUtente.push(numeroInseritoUtente)
   }
   else
   alert('hai perso!');
}
log
