function parilliset() {
    const input = document.getElementById("luku").value;
    const number = parseInt(input);

    // Tarkistetaan, että syöte on parillinen luku ja suurempi kuin 0
    if (number <= 0 || number % 2 !== 0) {
        document.getElementById("vastaus").innerText = "Syötä parillinen luku, joka on suurempi kuin 0.";
        return;
    }

    // Tarkistetaan, että syöte ei ylitä 100000
    if (number > 100000) {
        document.getElementById("vastaus").innerText = "Luku ylittää suurimman sallitun parillisen luvun!";
        return;
    }

    let evenNumbers = '';
    for (let i = 2; i <= number; i += 2) {
        evenNumbers += i + ' ';
    }

    document.getElementById("vastaus").innerText = evenNumbers.trim();
}
