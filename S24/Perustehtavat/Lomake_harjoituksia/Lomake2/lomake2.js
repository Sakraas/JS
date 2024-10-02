function etsiSuurin(){
    var taulukko = [];
    taulukko[0] = document.getElementById("eka").value;
    taulukko[1] = document.getElementById("toka").value;
    taulukko[2] = document.getElementById("kolme").value;
    taulukko[3] = document.getElementById("nelja").value;
    taulukko[4] = document.getElementById("viisi").value;

    document.getElementById("vastaus").innerHTML = "Annoit luvut: " + taulukko[0] + ", " + taulukko[1] + ", " + taulukko[2] + ", " + taulukko[3] + " ja " + taulukko[4];
    document.getElementById("vastaus2").innerHTML = "Antamistasi luvuista " + Math.max(...taulukko) + " on suurin.";
    event.preventDefault;
}