function satunnainen() {

  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);
    //tulostus sivulle
    document.getElementById("v1").innerHTML = "<img src=\'" + data.results[0].picture.large + "\'>";
    document.getElementById("v1").innerHTML += "<br />" + "<strong>Nimi: <strong />" + data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById("v1").innerHTML += "<br />" + "Puhelin: " + data.results[0].phone;
    document.getElementById("v1").innerHTML += "<br />" + "Sähköposti: " + data.results[0].email;
    document.getElementById("v1").innerHTML += "<br />" + "Maatunnus: " + data.results[0].nat + " " + "<br />" + "Maa: " + data.results[0].location.country;
    document.getElementById("v1").innerHTML += "<br />" + "Kaupunki: " + data.results[0].location.city;

  } );

}
