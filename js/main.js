// richiedere una parola
const chosenWord = prompt("seleziona una parola e scopri se è palindoma");

// invertire l'ordine della parola

let reverseWord = "";
for (let i = chosenWord.length - 1; i >= 0; i--){
    reverseWord += chosenWord[i];
};

// contollare ugualianza parola e parola invertita

function wordCheck(word1, word2) {
    let result;
    
    if(word1 == word2) {
        result = "true";
    } else {
        result = "false";
    };
    
    return result;
}
// risultato da stampare in index
let result = wordCheck(chosenWord, reverseWord);
if (result == "true") {
    document.getElementById("result").innerHTML = `la parola ${chosenWord} è palindroma`;    
} else {
    document.getElementById("result").innerHTML = `la parola ${chosenWord} non è palindroma`;
    
};

const number = Number(prompt("inserisci un numero da 1 a 5"));
const choice = prompt("scegli tra pari o dispari, il computer sara il tuo avversario e scegliera l'opposto");



const pcNumber = Math.floor(Math.random() * 5) + 1;
const sumNumber = number + pcNumber;

document.getElementById("pcHand").innerHTML = `l'avversario ha puntato ${pcNumber}`;
document.getElementById("tot").innerHTML = `totale ${sumNumber}`;

function oddEven(numero) {
    let risultato;

    if(numero % 2 == 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

     return risultato;
};

let risultato = oddEven(sumNumber);

if (number > 5 || number == 0 || isNaN(number)) {
    document.getElementById("dareResult").innerHTML = `il numero  ${number} non è valido`;
} else if (risultato.toLowerCase() == choice.toLowerCase()){
    document.getElementById("dareResult").innerHTML = `hai vinto`;
}else if (risultato.toLowerCase() !== choice.toLowerCase()) {
    document.getElementById("dareResult").innerHTML = `hai perso`;
}

console.log(choice);
if (choice !== "pari" && choice !== "dispari") {
    document.getElementById("dareResult").innerHTML = `il valore  ${choice} non è valido`;
};