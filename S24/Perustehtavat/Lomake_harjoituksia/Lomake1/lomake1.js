function jarjesta () {
    var taulukko = [];
    taulukko[0] = parseInt(document.getElementById("eka").value);
    taulukko[1] = parseInt(document.getElementById("toka").value);
    taulukko[2] = parseInt(document.getElementById("kolme").value);

    document.write("Annoit luvut: " + taulukko);

    taulukko.sort(function(a, b){return a-b});

    document.write("<br />Luvut järjestyksessä: " + taulukko);
}