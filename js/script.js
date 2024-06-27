// Recupero il pulsante per il calcolo del prezzo
const btn = document.getElementById("calculate");
btn.addEventListener('click', function () {
    let firstAndLastName = document.getElementById('firstAndLastName').value;
    let km = document.getElementById('km').value;
    let eta = document.getElementById('eta').value;
    let prezzo_base = km * 0.21;
    let prezzo_finale = prezzo_base;
    // programmo gli sconti
    if (eta == 1) {
        let sconto = prezzo_base * 0.2;
        prezzo_finale = prezzo_base - sconto; 
        // prezzo_finale = prezzo_finale * 0.8;
    }
    else if (eta == 0) {
        prezzo_finale = prezzo_base;
    }
    else if (eta == 2) {
        let sconto = prezzo_base * 0.4;
        prezzo_finale = prezzo_base - sconto;
        // prezzo_finale = prezzo_base * 0.6;
    }
    else {
        alert("Non hai selezionato l'età: verrà applicato il prezzo base.");
    }
    console.log(prezzo_finale);
    // arrotondo il valore alla seconda cifra decimale
    let finale = prezzo_finale.toFixed(2);
    // recupero l'elemento html che contiene la stringa generata e gli assegno il valore della riga 11
    document.getElementById("finale").innerText = finale;
});