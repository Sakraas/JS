function laske() {
    const luku = parseInt(document.getElementById("kertoma").value);
    const vastausElementti = document.getElementById("vastaus");

    // Tarkistetaan, onko syöte kelvollinen (positiivinen luku)
    if (isNaN(luku) || luku < 0) {
        vastausElementti.innerText = "Anna positiivinen luku.";
        return;
    }

    // Rajataan luku, jota voidaan laskea suoraan
    if (luku > 170) {
        vastausElementti.innerText = "Kertoma on liian suuri (yli 170).";
        return;
    }

    let kertoma = 1; // Aloitetaan kertoma yhdellä
    for (let i = luku; i > 0; i--) {
        kertoma *= i; // Kerrotaan lukuja yhteen
    }

    // Tulostetaan tulos
    vastausElementti.innerText = `Kertoma ${luku} on ${kertoma}.`;
}

