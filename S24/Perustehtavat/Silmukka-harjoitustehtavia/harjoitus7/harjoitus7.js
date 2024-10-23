function suorita() {
    let summa = 0;

    for (let i = 1; i <= 10; i++) {
        summa += i;
    }

    let tulostaElement = document.getElementById('tulostaVastaus');
    tulostaElement.textContent = '10 ensimmäisen numeron summa on: ' + summa;
}
