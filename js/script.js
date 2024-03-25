//Variabili globali
let price;

//Raccolta dati
const kilometer = parseInt(prompt("Quanti chilometri vuoi percorrere?")); // number
const age = parseInt(prompt("Quanti anni hai?")); // number

//Esecuzione logica
price = kilometer * 0.21; // number
console.log(price);
if (age > 0 && age < 18) {
    price = price - (price * 0.20);
    document.getElementById("age").innerHTML = "Minorenne:"
} else if (age >= 65 && age < 110) {
    price = price - (price * 0.40);  
    document.getElementById("age").innerHTML = "Over 65:" 
}

//Output

document.getElementById("biglietto").innerHTML = price.toFixed(2);