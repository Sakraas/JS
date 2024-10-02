function paritonParillinen()
  {
    var arvo;
    arvo = document.getElementById('luku').value;
    document.getElementById("vastaus").innerHTML = "Antamasi luku on: " + arvo;
    if(arvo%2 == 0)
    {
      document.getElementById("vastaus2").innerHTML = "<br>Antamasi luku on parillinen";
    }
    else {
      document.getElementById("vastaus2").innerHTML = "<br>Antamasi luku on pariton";
    }
  }