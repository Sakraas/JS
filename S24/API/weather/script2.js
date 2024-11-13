let map;
let marker;

// Hae sää ja päivitä kartta
async function saa() {
    const paikkakunta = document.getElementById("city").value;
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + paikkakunta;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        // Näytetään säätiedot
        document.getElementById("v1").innerHTML =
            "Paikkakunta: " + result.location.name + ", " + result.location.country + " <br/>" +
            "Asteosoite: " + result.location.lat + " leveysastetta ja " + result.location.lon + " pituusastetta <br/>" +
            "Lämpötila: " + result.current.temp_c + " astetta<br/>" +
            "Kosteus: " + result.current.humidity + "%<br/>" +
            "Tuulen nopeus: " + result.current.wind_kph + " km/t";

        // Alustetaan kartta, kun sää on saatu
        initMap(result.location.lat, result.location.lon);
    } catch (error) {
        console.error(error);
        alert("Virhe sään hakemisessa");
    }
}

// Alustetaan kartta saatujen koordinaattien mukaan
function initMap(lat, lon) {
    const initialLocation = { lat: lat, lng: lon }; 

    // Alustetaan kartta
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: initialLocation,
    });

    // Lisätään merkin sijainti kartalle
    marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Valittu paikkakunta",
    });
}

// Funktio, joka päivittää kartan manuaalisesti
function updateMap() {
    const lat = parseFloat(document.getElementById("latitude").value);
    const lng = parseFloat(document.getElementById("longitude").value);

    if (isNaN(lat) || isNaN(lng)) {
        alert("Anna kelvolliset koordinaatit.");
        return;
    }

    const newLocation = { lat: lat, lng: lng };

    // Siirretään kartan keskipistettä
    map.setCenter(newLocation);

    // Siirretään merkin sijaintia
    marker.setPosition(newLocation);
}
