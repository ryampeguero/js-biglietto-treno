# Biglietto del treno

## Testo della consegna
``````
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
``````

## Svolgimento
1. Raccolta dati:
    - [ ] Numero di chilometri da percorrere
    - [ ] Età del passeggero

2. Esecuzione logica:
    - [ ] Calcolare il prezzo totale del biglietto: Moltiplicando il numero di chilometri per 0.21
    - [ ] Controllare l'età del passeggero per le seguenti casistiche: 
        - Minorenni (età < 18) 20% di sconto
        - Over 65 (età >= 65) 40% di sconto
    - [ ] Apliccare lo sconto giusto all'interno dei blocchi dei costrutti if else.

3. Output:
    - [ ] Prezzo finale stampato in pagina in forma umana (Massimo due decimali).