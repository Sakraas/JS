function tarkista(){
    let arvo = document.getElementById("viikonpaiva").value;
    if(arvo == 1){
        document.getElementById("vastaus").innerHTML = "Maanantai";
    }
    else if(arvo == 2){
        document.getElementById("vastaus").innerHTML = "Tiistai";
    }
    else if(arvo == 3){
        document.getElementById("vastaus").innerHTML = "Keskiviikko";
    }
    else if(arvo == 4){
        document.getElementById("vastaus").innerHTML = "Torstai";
    }
    else if(arvo == 5){
        document.getElementById("vastaus").innerHTML = "Perjantai";
    }
    else if(arvo == 6){
        document.getElementById("vastaus").innerHTML = "Lauantai";
    }
    else if(arvo ==7){
        document.getElementById("vastaus").innerHTML = "Sunnuntai";
    }
    else{
        document.getElementById("vastaus").innerHTML = "Viikossa on seitsemän päivää. Tarkistaisitko ystävällisesti antamasi viikonpäivän numeron, niin yritän uudelleen.";
    }
}
