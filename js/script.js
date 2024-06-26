// Recupero il pulsante per il calcolo del prezzo
const btn = document.getElementById("calculate-price");
btn.addEventListener('click', function () {
    let firstAndLastName = document.getElementById('FirstAndLastName').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    let prezzo_base = km * 0.21;
    console.log(firstAndLastName, km, eta, prezzo_finale);
    // Creo variabile a cui assegno come valore il prodotto tra il valore km ed il valore età
    let prezzo_finale = prezzo_base;
    // programmo gli sconti
    if (eta < 18) {
        let sconto = prezzo_base * 0.2;
        prezzo_finale = prezzo_base - sconto;
        // prezzo_finale = prezzo_finale * 0.8;
    }
    else if (eta > 65) {
        let sconto = prezzo_base * 0.4;
        prezzo_finale = prezzo_base - sconto;
        // prezzo_finale = prezzo_base * 0.6;
    };
});
console.log(prezzo_finale);
// arrotondo il valore alla seconda cifra decimale
let finale = prezzo_finale.toFixed(2);
// recupero l'elemento html che contiene la stringa generata e gli assegno il valore della riga 11
document.getElementById("finale").innerText = finale;