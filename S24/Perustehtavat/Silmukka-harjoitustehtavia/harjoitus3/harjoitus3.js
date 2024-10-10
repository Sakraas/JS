function tarkasta() {
    const sana = document.getElementById("sana").value; // Haetaan syöte
    const vastausElementti = document.getElementById("vastaus");

    // Tarkistetaan, onko sanassa ö- tai Ö-kirjain
    if (sana.includes('ö') || sana.includes('Ö')) {
        vastausElementti.innerText = "On";
    } else {
        vastausElementti.innerText = "Ei ole";
    }
}
