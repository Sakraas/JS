function tarkista(){
    var arvo = document.getElementById("vuodet").value;
    if((0 == arvo % 4)&&(0 != arvo % 100) || (0 == arvo % 400)){
        document.getElementById("vastaus").innerHTML = "Kyllä, vuosi:" + arvo + ", on karkausvuosi"
    }
    else {
        document.getElementById("vastaus").innerHTML = "Ei, vuosi:" + arvo + ", ei ole karkausvuosi"
    }
}