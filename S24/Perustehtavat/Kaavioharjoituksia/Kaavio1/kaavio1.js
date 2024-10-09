function tarkista() {
    const luku = parseFloat(document.getElementById("luku").value);
    let vastaus = "";

    if (isNaN(luku)) {
        vastaus = "Syötä kelvollinen luku.";
    } else if (luku > 0) {
        vastaus = luku + " on positiivinen luku.";
    } else if (luku < 0) {
        vastaus = luku + " on negatiivinen luku.";
    } else {
        vastaus = "Luku on nolla.";
    }

    document.getElementById("vastaus").innerHTML = vastaus;
}
