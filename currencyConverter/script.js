document.addEventListener("DOMContentLoaded", function() {
    fetchCurrencies();
});

function fetchCurrencies() {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            const fromCurrencySelect = document.getElementById("fromCurrency");
            const toCurrencySelect = document.getElementById("toCurrency");

            currencies.forEach(currency => {
                const option1 = document.createElement("option");
                option1.value = currency;
                option1.text = currency;
                fromCurrencySelect.appendChild(option1);

                const option2 = document.createElement("option");
                option2.value = currency;
                option2.text = currency;
                toCurrencySelect.appendChild(option2);
            });
        })
        .catch(error => console.error("Error:", error));
}

function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = amount * exchangeRate;
            document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error("Error:", error));
}
