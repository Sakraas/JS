function laskuri() {
    var arvo = parseInt(document.getElementById("luku").value);
    var lause = ""; // Alustetaan muuttuja tulosta varten

    // Luodaan kertotaulu
    for (let i = 1; i <= 10; i++) {
        lause += arvo + " x " + i + " = " + (arvo * i) + "<br>";
    }

    // Näytetään tulos
    document.getElementById("vastaus").innerHTML = lause;
}