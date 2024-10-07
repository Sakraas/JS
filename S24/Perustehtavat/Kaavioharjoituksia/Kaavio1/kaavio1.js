function tarkista() {
    let arvo = document.getElementById("luku").value;
    if(arvo >= 0){
        document.getElementById("vastaus").innerHTML = "Lukusi on positiivinen";
    }
    else{
        document.getElementById("vastaus").innerHTML = "Antamasi luku on negatiivinen";
    }
}