function tulosta() {
    let tulostusElement = document.getElementById('tulostus');
    let numbers = [];

    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }

    tulostusElement.textContent = numbers.join(', ');
}