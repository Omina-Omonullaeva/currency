let elFormCurrency = document.querySelector(".currency");
let elFormInput = document.querySelector(".currency__input");
let elFormSelect = document.querySelector(".currency__select");
let elFormBtn = document.querySelector(".currency__btn");
let elCurrencyResult = document.querySelector(".currency__result");


const USD = 12206.41;
const RUBL = 126.94;
const EURO = 12921.89;


elFormBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    
    let result = "";
    
    
    if (elFormInput.value !== "" && elFormSelect.value !== "Choose") {
        if (elFormSelect.value === "Usd") {
            result = elFormInput.value * USD;
        } else if (elFormSelect.value === "Rubl") {
            result = elFormInput.value * RUBL;
        } else if (elFormSelect.value === "Euro") {
            result = elFormInput.value * EURO;
        }
    }
    
    elCurrencyResult.innerHTML =
    "<div class='alert bg-primary text-center mb-0'>Natija:" + result + " so'm</div>";
})