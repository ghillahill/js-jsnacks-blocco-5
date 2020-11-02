$(document).ready(function () {

    //JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
    var listaBiciDaCorsa = [
        {
            nome:'Atlantic',
            peso: 10
        },
        {
            nome:'Espera',
            peso: 7
        },
        {
            nome:'Biontic',
            peso: 8
        },
        {
            nome:'Clara',
            peso: 12
        },
    ]

    listaBiciDaCorsa.sort(function (a, b) {
        return a.peso - b.peso
    })
    
    var nomeBiciMinore = listaBiciDaCorsa[0].nome;
    var pesoBiciMinore = listaBiciDaCorsa[0].peso;

    $('.bike-info').text("La bici di riferimento è: " + nomeBiciMinore);
    $('.bike-weight').text("Il peso della bici più leggera è: " + pesoBiciMinore);

});
