function muunna() {
    // Esimerkkitaulukko
    const taulukko = [
        [1, 2, 1, 24],
        [8, 11, 9, 4],
        [7, 0, 7, 27],
        [7, 4, 24, 14],
        [3, 10, 26, 7]
    ];

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
