$(document).ready(function () {

    //JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.
    var listaNomi = [
        {
            nome:'Alberto',
        },
        {
            nome:'Chiara',
        },
        {
            nome:'Simone',
        },
        {
            nome:'Carlo',
        },
        {
            nome:'Davide',
        },
        {
            nome:'Erica',
        },
        {
            nome:'Carla',
        },
        {
            nome:'Filippo',
        },
        {
            nome:'Maria',
        },
        {
            nome:'Sandro',
        },
    ]

    var nuovaListaNomi = [];

    var sceltaUtenteUno = parseInt(prompt("Digitare un numero da 0 a 9"));
    var sceltaUtenteDue = parseInt(prompt("Digitare un numero da 0 a 9"));

    nuovaListaNomi.push(listaNomi.slice(sceltaUtenteUno,sceltaUtenteDue));
    
    console.log(nuovaListaNomi);


});
