function muunna() {
    // Haetaan käyttäjän syöttämät rivit
    const rivit = document.getElementById("taulukonRivit").value.trim().split('\n');
    const taulukko = rivit.map(rivi => rivi.split(',').map(Number));

    // Luodaan HTML-taulukko
    let htmlTaulukko = '<table border="1">';

    // Käydään läpi 2-ulotteinen taulukko ja lisätään rivit HTML-taulukkoon
    for (let rivi of taulukko) {
        htmlTaulukko += '<tr>';
        for (let solmu of rivi) {
            htmlTaulukko += `<td>${solmu}</td>`;
        }
        htmlTaulukko += '</tr>';
    }

    htmlTaulukko += '</table>';

    // Näytetään luotu HTML-taulukko
    document.getElementById("vastaus").innerHTML = htmlTaulukko;
}
