// Tämä funktio päivittää Bitcoinin hinnan, kun käyttäjä painaa nappia
async function hinta() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

    try {
        // Haetaan data API:sta
        const response = await fetch(url);

        // Tarkistetaan, että vastaus on onnistunut
        if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status}`);
        }

        // Parsitaan JSON-vastaus
        const data = await response.json();

        // Poimitaan olennaiset tiedot
        const bitcoinHinta = data.bpi.EUR.rate;
        let paivitettyAika = data.time.updated;
        let d = paivitettyAika;
        let tunnit = d.substring(13,15);
        let min = d.substring(15,18);
        let sek = d.substring(18,21);
        
        suomenAika = parseInt(tunnit) + 2;

        let aika = suomenAika + min + sek + "<br /> UTC+02:00 (Helsinki)"

        // Haetaan HTML-elementti, jonka id on 'v1'
        const v1Element = document.getElementById("v1");

        // Tarkistetaan, että elementti löytyy
        if (v1Element) {
            // Asetetaan elementin sisällöksi tiedot
            v1Element.innerHTML = `
                <p><strong>Nykyinen Bitcoinin hinta (EUR):</strong> ${bitcoinHinta}</p>`;
                v1Element.innerHTML += `<p><strong>Viimeksi päivitetty:</strong> ` + aika;
        }

    } catch (error) {
        console.error('Virhe tietojen haussa:', error);

        // Näytetään virhe käyttäjälle
        const v1Element = document.getElementById('v1');
        if (v1Element) {
            v1Element.innerHTML = '<p class="error">Bitcoinin hinnan hakeminen epäonnistui. Yritä myöhemmin uudelleen.</p>';
        }
    }
}

// {
//     "time": {
//       "updated": "Nov 13, 2024 10:24:07 UTC",
//       "updatedISO": "2024-11-13T10:24:07+00:00",
//       "updateduk": "Nov 13, 2024 at 10:24 GMT"
//     },
//     "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
//     "chartName": "Bitcoin",
//     "bpi": {
//       "USD": {
//         "code": "USD",
//         "symbol": "&#36;",
//         "rate": "87,377.21",
//         "description": "United States Dollar",
//         "rate_float": 87377.2102
//       },
//       "GBP": {
//         "code": "GBP",
//         "symbol": "&pound;",
//         "rate": "68,521.82",
//         "description": "British Pound Sterling",
//         "rate_float": 68521.8198
//       },
//       "EUR": {
//         "code": "EUR",
//         "symbol": "&euro;",
//         "rate": "82,220.906",
//         "description": "Euro",
//         "rate_float": 82220.9062
//       }
//     }
//   }
