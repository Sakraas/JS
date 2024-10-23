function laske() {
    // Haetaan käyttäjän syöttämät numerot
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let parilliset = [];
    let parittomat = [];
    let parillisetSumma = 0;
    let parittomatSumma = 0;

    // Tarkistetaan, että num1 on pienempi kuin num2
    if (num1 >= num2) {
        document.getElementById('tulostaVastaus').innerText = 'Syötä suurempi numero ensimmäisen jälkeen.';
        return;
    }

    // Etsitään parilliset ja parittomat numerot
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            parilliset.push(i);
            parillisetSumma += i;
        } else {
            parittomat.push(i);
            parittomatSumma += i;
        }
    }

    // Tulostetaan tulokset
    let tulostus = `Parilliset numerot: ${parilliset.join(', ')} (Summa: ${parillisetSumma})\n`;
    tulostus += `Parittomat numerot: ${parittomat.join(', ')} (Summa: ${parittomatSumma})`;
    
    document.getElementById('tulostaVastaus').innerText = tulostus;
}
