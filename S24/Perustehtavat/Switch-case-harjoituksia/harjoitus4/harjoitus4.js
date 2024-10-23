function suoritaArvonta() {
    // Määritellään korttipakan maat ja symbolit
    const maatt = [
        { nimi: 'Hertta', symboli: '♥️', vari: 'red' },
        { nimi: 'Ruutu', symboli: '♦️', vari: 'red' },
        { nimi: 'Pata', symboli: '♣️', vari: 'black' },
        { nimi: 'Risti', symboli: '♠️', vari: 'black' }
    ];
    const arvot = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const pakka = [];

    // Luodaan korttipakka
    for (let maa of maatt) {
        for (let arvo of arvot) {
            pakka.push({ kortti: `${arvo} ${maa.symboli}`, vari: maa.vari });
        }
    }

    // Sekoitus
    for (let i = pakka.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pakka[i], pakka[j]] = [pakka[j], pakka[i]]; // Swap
    }

    // Arvotaan 5 korttia
    const arvotutKortit = pakka.slice(0, 5);

    // Luodaan HTML-merkinnät
    const tulos = arvotutKortit.map(kortti => `<span style="color: ${kortti.vari};">${kortti.kortti}</span>`).join(', ');

    // Näytetään tulos
    document.getElementById("vastaus").innerHTML = `Arvotut kortit: ${tulos}`;
}

