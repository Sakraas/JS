function muunna() {
    const input = document.getElementById("salasana").value;
    let muunnos = '';

    for (let i = 0; i < input.length; i++) {
        muunnos += input[i]; // Lisää alkuperäinen kirjain
        muunnos += 'Ö'; // Lisää iso Ö jokaisen kirjaimen jälkeen
    }

    // // Poistetaan viimeinen Ö, jotta se ei jää turhaksi
    // if (muunnos.endsWith('Ö')) {
    //     muunnos = muunnos.slice(0, -1);
    // }

    alert("Muunnettuna: " + muunnos);
}
