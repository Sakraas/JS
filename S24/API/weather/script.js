async function saa() {
    paikkakunta = document.getElementById("city").value;
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
        console.log(result);
        document.getElementById("v1").innerHTML =
            "Paikkakunta: " + result.location.name + ", " + result.location.country + " <br/>" +
            "Asteosoite: " + result.location.lat + " leveysastetta ja " + result.location.lon + " pituusastetta <br/>" +
            "Lämpötila: " + result.current.temp_c + " astetta<br/>" +
            "Kosteus: " + result.current.humidity + "%<br/>" +
            "Tuulen nopeus " + result.current.wind_kph + " km/t";
    } catch (error) {
        console.error(error);
    }
}
let map;
let marker;

// Alustetaan kartta
function initMap() {
    // Alustetaan kartan keskipiste ja zoom-taso
    const initialLocation = { lat: result.location.lat, lng: result.location.lon }; // Helsingin koordinaatit

    // Alustetaan kartta
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: initialLocation,
    });

    // Lisätään aloitusmerkki kartalle
    marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Aloituspaikka",
    });
}

// Funktio, joka päivittää kartan koordinaattien mukaan
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
