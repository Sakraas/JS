function etsi() {
    // Haetaan syötetyt luvut
    const luku1 = parseFloat(document.getElementById('luku1').value);
    const luku2 = parseFloat(document.getElementById('luku2').value);
    const luku3 = parseFloat(document.getElementById('luku3').value);
    const luku4 = parseFloat(document.getElementById('luku4').value);
    const luku5 = parseFloat(document.getElementById('luku5').value);
    
    // Luodaan taulukko syötteistä
    const luvut = [luku1, luku2, luku3, luku4, luku5];

    // Tarkistetaan, että kaikki syötteet ovat numeroita
    if (luvut.some(isNaN)) {
        document.getElementById('tulostaVastaus').textContent = 'Ole hyvä ja syötä kaikki viisi lukua.';
        return;
    }

    // Etsitään pienin ja suurin luku
    const pienin = Math.min(...luvut);
    const suurin = Math.max(...luvut);
    
    // Näytetään tulos
    document.getElementById('tulostaVastaus').textContent = `Pienin luku: ${pienin}, Suurin luku: ${suurin}`;
}
