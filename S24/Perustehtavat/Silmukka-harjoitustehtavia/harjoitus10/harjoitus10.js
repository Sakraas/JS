function muokkaa() {
    // Haetaan käyttäjän syöttämä salasana
    const salasana = document.getElementById('salasana').value;

    // Kirjaimien lista, joista satunnaisia kirjaimia valitaan
    const kirjaimet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let uusiSalasana = '';

    // Lisätään satunnaisia kirjaimia alkuperäisen salasanan väliin
    for (let i = 0; i < salasana.length; i++) {
        uusiSalasana += salasana[i]; // Lisätään alkuperäinen merkki
        // Lisätään satunnainen kirjain jokaisen merkin jälkeen
        if (i < salasana.length - 1) {
            const satunnainenIndex = Math.floor(Math.random() * kirjaimet.length);
            uusiSalasana += kirjaimet[satunnainenIndex];
        }
    }

    // Näytetään uusi salasana
    document.getElementById('tulostaVastaus').textContent = `Muokattu salasana: ${uusiSalasana}`;
}
