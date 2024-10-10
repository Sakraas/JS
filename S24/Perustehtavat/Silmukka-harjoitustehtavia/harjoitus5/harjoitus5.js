function luvut() {
    const vastausElementti = document.getElementById("vastaus");
    let tuloste = ""; // Alustetaan tuloste

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            tuloste += "hipheijaa, "; // Jos jaollinen 3:lla ja 5:llä
        } else if (i % 3 === 0) {
            tuloste += "hip, "; // Jos jaollinen 3:lla
        } else if (i % 5 === 0) {
            tuloste += "heijaa, "; // Jos jaollinen 5:llä
        } else {
            tuloste += i + ", "; // Muut luvut
        }
    }

    // Poistetaan viimeinen pilkku ja välilyönti
    tuloste = tuloste.slice(0, -2);
    
    // Näytetään tulos
    vastausElementti.innerText = tuloste;
}
