function tarkista() {
    const vuosi = parseInt(document.getElementById("vuodet").value);
    let vastaus = "";

    if (isNaN(vuosi)) {
        vastaus = "Syötä kelvollinen vuosiluku.";
    } else {
        const onKarkausvuosi = (vuosi % 4 === 0 && vuosi % 100 !== 0) || (vuosi % 400 === 0);
        vastaus = onKarkausvuosi ? vuosi + " on karkausvuosi." : vuosi + " ei ole karkausvuosi.";
    }

    document.getElementById("vastaus").innerHTML = vastaus;
}