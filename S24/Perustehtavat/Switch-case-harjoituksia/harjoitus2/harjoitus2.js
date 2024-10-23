function arvo() {
    const numbers = new Set();
    
    // Arvotaan 7 uniikkia numeroa 1-40
    while (numbers.size < 7) {
        const randomNum = Math.floor(Math.random() * 40) + 1;
        numbers.add(randomNum);
    }
    
    // Muutetaan Set taulukoksi ja järjestetään numerot
    const lottoNumbers = Array.from(numbers).sort((a, b) => a - b);
    
    // Näytetään tulos
    document.getElementById("vastaus").innerText = `Arvotut lottonumerot: ${lottoNumbers.join(', ')}`;
}