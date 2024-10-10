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
