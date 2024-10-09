// function tarkista(){
//     let arvo = document.getElementById("viikonpaiva").value;
//     if(arvo == 1){
//         document.getElementById("vastaus").innerHTML = "Maanantai";
//     }
//     else if(arvo == 2){
//         document.getElementById("vastaus").innerHTML = "Tiistai";
//     }
//     else if(arvo == 3){
//         document.getElementById("vastaus").innerHTML = "Keskiviikko";
//     }
//     else if(arvo == 4){
//         document.getElementById("vastaus").innerHTML = "Torstai";
//     }
//     else if(arvo == 5){
//         document.getElementById("vastaus").innerHTML = "Perjantai";
//     }
//     else if(arvo == 6){
//         document.getElementById("vastaus").innerHTML = "Lauantai";
//     }
//     else if(arvo ==7){
//         document.getElementById("vastaus").innerHTML = "Sunnuntai";
//     }
//     else{
//         document.getElementById("vastaus").innerHTML = "Viikossa on seitsemän päivää. Tarkistaisitko ystävällisesti antamasi viikonpäivän numeron, niin yritän uudelleen.";
//     }
// }
function tarkista() {
    const viikonpaiva = parseInt(document.getElementById("viikonpaiva").value);
    let vastaus = "";

    switch (viikonpaiva) {
        case 1:
            vastaus = "Maanantai";
            break;
        case 2:
            vastaus = "Tiistai";
            break;
        case 3:
            vastaus = "Keskiviikko";
            break;
        case 4:
            vastaus = "Torstai";
            break;
        case 5:
            vastaus = "Perjantai";
            break;
        case 6:
            vastaus = "Lauantai";
            break;
        case 7:
            vastaus = "Sunnuntai";
            break;
        default:
            vastaus = "Syötä viikonpäivän numero 1-7.";
    }

    document.getElementById("vastaus").innerHTML = vastaus;
}
