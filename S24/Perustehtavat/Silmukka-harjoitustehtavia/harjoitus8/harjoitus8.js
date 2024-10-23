function laske() {
    // Haetaan käyttäjän syöttämät luvut
    const luku1 = parseFloat(document.getElementById('luku1').value);
    const luku2 = parseFloat(document.getElementById('luku2').value);
    
    // Tarkistetaan, että syötteet ovat numeroita
    if (isNaN(luku1) || isNaN(luku2)) {
        document.getElementById('tulostaVastaus').textContent = 'Ole hyvä ja syötä molemmat luvut.';
        return;
    }

    // Lasketaan luku1 potenssiin luku2
    const tulos = Math.pow(luku1, luku2);
    
    // Näytetään tulos käyttäjälle
    document.getElementById('tulostaVastaus').textContent = `${luku1} potenssiin ${luku2} on: ${tulos}`;
}
