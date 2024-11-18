function satunnainen() {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0]);
      
      // Rakennetaan HTML-sisältö satunnaisesta käyttäjästä
      let userHTML = "<img src='" + data.results[0].picture.large + "'>";
      userHTML += "<br /><strong>Nimi: </strong>" + data.results[0].name.first + " " + data.results[0].name.last;
      userHTML += "<br />Puhelin: " + data.results[0].phone;
      userHTML += "<br />Sähköposti: " + data.results[0].email;
      userHTML += "<br />Maatunnus: " + data.results[0].nat + "<br />Maa: " + data.results[0].location.country;
      userHTML += "<br />Kaupunki: " + data.results[0].location.city;
      userHTML += "<br />Salasana: " + data.results[0].login.password;

      // Näytetään käyttäjän tiedot
      document.getElementById("v1").innerHTML = userHTML;

      // Haetaan säätiedot käyttäjän kaupungin mukaan
      const paikkakunta = data.results[0].location.city;
      const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + paikkakunta;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      // Asynkroninen funktio sään hakemiseksi
      async function fetchWeatherData() {
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          
          // Tarkistetaan onko säätietoja saatu
          if (result && result.location) {
            document.getElementById("v2").innerHTML =
              "Paikkakunta: " + result.location.name + ", " + result.location.country + " <br/>" +
              "Asteosoite: " + result.location.lat + " leveysastetta ja " + result.location.lon + " pituusastetta <br/>" +
              "Lämpötila: " + result.current.temp_c + " astetta<br/>" +
              "Kosteus: " + result.current.humidity + "%<br/>" +
              "Tuulen nopeus " + result.current.wind_kph + " km/t";
          } else {
            document.getElementById("v2").innerHTML = "Säädataa ei saatu.";
          }
        } catch (error) {
          console.error(error);
          document.getElementById("v2").innerHTML = "Virhe säätietojen hakemisessa.";
        }
      }

      // Kutsutaan säätiedon hakemista
      fetchWeatherData();
    })
    .catch(error => {
      console.error('Virhe käyttäjätiedon haussa:', error);
    });
}

