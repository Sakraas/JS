function laske(){
    var arvo1 = parseFloat(document.getElementById("luku1").value);
    var arvo2 = parseFloat(document.getElementById("luku2").value);
    var arvo3 = parseFloat(document.getElementById("luku3").value);
    var arvo4 = parseFloat(document.getElementById("luku4").value);
    var arvo5 = parseFloat(document.getElementById("luku5").value);
    var summa
    var keskiarvo
    if(!arvo1){
        document.getElementById("vastaus").innerHTML = "Tarkista ystävällisesti syöttämäsi luvut, niin yritän uudelleen"
    }
    else if(!arvo2){
        document.getElementById("vastaus").innerHTML = "Tarkista ystävällisesti syöttämäsi luvut, niin yritän uudelleen"
    }
    else if(!arvo3){
        document.getElementById("vastaus").innerHTML = "Tarkista ystävällisesti syöttämäsi luvut, niin yritän uudelleen"
    }
    else if(!arvo4){
        document.getElementById("vastaus").innerHTML = "Tarkista ystävällisesti syöttämäsi luvut, niin yritän uudelleen"
    }
    else if(!arvo5){
        document.getElementById("vastaus").innerHTML = "Tarkista ystävällisesti syöttämäsi luvut, niin yritän uudelleen"
    }
    else {
        summa = arvo1+arvo2+arvo3+arvo4+arvo5;
        keskiarvo = summa / 5;
        document.getElementById("vastaus").innerHTML = "Laskin lukujen summaksi:" + summa + ", ja lukujen keskiarvoksi:" + keskiarvo + "";
    }
}