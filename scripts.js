document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("discountForm");
    let result = document.getElementById("result");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let amountInput = document.getElementById("amount");
        let amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount <= 0) {
            result.textContent = "Bitte geben Sie einen gültigen Betrag ein.";
            return;
        }
        if (amount < 100) {
            console.log("Mindestbestellwert nicht erreicht.");
            result.textContent = "Mindestbestellwert nicht erreicht.";
        }
        else if (amount < 250) {
            let discountedAmount = amount * 0.95;
            console.log("Betrag nach Abzug des Rabatts: \u20AC".concat(discountedAmount.toFixed(2)));
            result.textContent = "Betrag nach Abzug des Rabatts: \u20AC".concat(discountedAmount.toFixed(2));
        }
        else if (amount < 500) {
            let discountedAmount = amount * 0.90;
            console.log("Betrag nach Abzug des Rabatts: \u20AC".concat(discountedAmount.toFixed(2)));
            result.textContent = "Betrag nach Abzug des Rabatts: \u20AC".concat(discountedAmount.toFixed(2));
        }
        else {
            let discountedAmount = amount * 0.88;
            console.log("Betrag nach Abzug des Rabatts: \u20AC".concat(discountedAmount.toFixed(2)));
            result.textContent = "Betrag nach Abzug des Rabatts: \u20AC".concat(discountedAmount.toFixed(2));
        }
    });
});
