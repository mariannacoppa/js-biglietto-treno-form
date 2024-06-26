Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

Pseudocodice:
1 creo form che richieda:
2.1 Nome e Cognome del passeggero
2.2 km da percorrere
2.3 fascia d'età del passeggero
3 Creo variabile a cui assegno come valore il prodotto tra il valore km ed il valore età
4 IF l'età è < 18 anni
5 : sconto del 20% sul prezzo
6 ELSE IF età > 65 anni
7 : sconto del 40% sul prezzo
8 ELSE Non si ha diritto ad alcuno sconto
9 Arrotondo il valore del punto 3 alla seconda cifra decimale
10 Creo nell'html un elemento (con id) che conterrà la stringa generata
11 recupero l'elemento html che contiene la stringa generata e gli assegno il valore del punto 3
12 stilizzo la pagina
