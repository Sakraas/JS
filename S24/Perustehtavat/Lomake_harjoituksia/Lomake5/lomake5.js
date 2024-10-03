function kaanna(){
    var lang = document.getElementById('kieli').value;
    if(lang == 'fin')
    {
        document.getElementById("vastaus").innerHTML = "Hei maailma!";
    }
    else if(lang == 'eng')
    {
        document.getElementById("vastaus").innerHTML = "Hello World!";
    }
    else if(lang == 'swe')
    {
        document.getElementById("vastaus").innerHTML = "Hej världen!";
    }
    else {
        document.getElementById("vastaus").innerHTML = "Hola Mundo!";
    }
  }