function ajoOikeus(){
    var arvo;
    arvo = parseInt(document.getElementById('ika').value);
    if(arvo < 15){
        document.getElementById("vastaus").innerHTML = "Olet oikeutettu ajamaan polkupyörällä, ollessasi " + arvo + ". vuotias.";
    }
    else if(arvo < 18){
        document.getElementById("vastaus").innerHTML = "Olet oikeutettu ajamaan mopolla, ollessasi " + arvo + ". vuotias. Muista huolehtia, että ajokortissasi on voimassaoleva ajo-oikeus kyseiselle ajoneuvolle.";
    }
    else{
        document.getElementById("vastaus").innerHTML = "Olet oikeutettu ajamaan autolla, ollessasi " + arvo + ". vuotias. Muista huolehtia, että ajokortissasi on voimassaoleva ajo-oikeus kyseiselle ajoneuvolle.";
    }
}