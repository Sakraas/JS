function laske() {
    const letterValues = {
        'A': 1, 'E': 1, 'I': 1, 'N': 1, 'S': 1, 'T': 1,
        'O': 2, 'Ä': 2, 'K': 2, 'L': 2,
        'U': 3, 'M': 3,
        'Y': 4, 'H': 4, 'J': 4, 'P': 4, 'R': 4, 'V': 4,
        'Ö': 7, 'D': 7,
        'B': 8, 'F': 8, 'G': 8,
        'C': 10
    };
    const sana = document.getElementById("sana").value.toUpperCase();
    let totalPoints = 0;

    for (let char of sana) {
        totalPoints += letterValues[char] || 12; // Oletusarvo 12 muille merkeille
    }

    document.getElementById("vastaus").innerText = `Sanan ${sana} pisteet: ${totalPoints}`;
}
