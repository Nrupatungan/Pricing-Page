const products = document.querySelector('select[name="products"]');
const categories = document.querySelector('select[name="categories"]')
const animate = document.querySelector('.animate');
const btnContainer = document.querySelector('.btn-container');
const table = document.querySelector('.table-container');
const currencies = document.querySelector('select[name="currencies"]');
const nodelist = document.querySelectorAll('tbody tr td.pricing-cell');

const prices = Array.from(nodelist);
const priceArray = new Array();
const noSignPrice = new Array();

for(let i = 0; i < prices.length; i++){
    const price = prices[i].textContent;
    priceArray.push(price);
}

for(let i = 0; i < priceArray.length; i++){
    const price = priceArray[i].replace("$", "");
    noSignPrice.push(price);
}

products.value = "";
categories.value = "";
currencies.value = "inr";

products.addEventListener('change', () => {
    if (products.value !== ""){
        animate.classList.add("animation");
        animate.style.animation = "slide 1s forwards";
        categories.addEventListener('change', () => {
            if (categories.value !== ""){
                btnContainer.classList.add("d-block");
                table.classList.add("d-block");
                table.style.animation = "slide 1s forwards";
            } else {
                btnContainer.classList.remove("d-block");
                table.classList.remove("d-block");
                currencies.value = "inr";
            }
        })
    } else {
        animate.classList.remove("animation");
        btnContainer.classList.remove("d-block");
        table.classList.remove("d-block");
        categories.value = "";
        currencies.value = "inr";
    }
});


// function currencyChange(e){
//     const newPrices = new Array();
//     const api = "https://api.exchangerate-api.com/v4/latest/USD";
//     fetch(`${api}`)
//     .then(currency => {
//         return currency.json();
//     }).then(currency => {
//         let fromRate = currency.rates[resultFrom];
//         let toRate = currency.rates[resultTo];
//         console.log(fromRate);
//         console.log(toRate);
//     });
// }

const currencyElements = document.querySelectorAll('.currency');
const usdChangeRate = {
      INR: 77.39, // 1INR = 77.39 USD
      EUR: 0.933, // 1EUR = 0.933 USD
      USD: 1.0
};

let toCurrency;
let el;
let fromCurrency;

currencies.addEventListener('change', () => {
        toCurrency = currencies.value.toUpperCase();
        for (let i=0,l=currencyElements.length; i<l; ++i) {
            el = currencyElements[i];
            fromCurrency = el.getAttribute("data-currencyName").toUpperCase();
        }
        usd(fromCurrency, toCurrency, el);
})

function usd(a, b, c){
    for(let j = 0; j < noSignPrice.length; j++){
        const price = noSignPrice[j];
        console.log(price)
        if(a in usdChangeRate){
            let fromCurrentToUsd = price * usdChangeRate[a];
            console.log(fromCurrentToUsd)
            let toCurrentMoney = fromCurrentToUsd / usdChangeRate[b];
            console.log(toCurrentMoney)
            if (toCurrency === "INR"){
                c.innerHTML = "<span>" + "&#8377;" + "</span>" + toCurrentMoney;
                c.setAttribute("data-currencyName",b);
            } else if(toCurrency === "USD"){
                c.innerHTML = "<span>" + "&dollar;" + "</span>" + toCurrentMoney;
                c.setAttribute("data-currencyName",b);
            } else {
                c.innerHTML = "<span>" + "&euro;" + "</span>" + toCurrentMoney;
                c.setAttribute("data-currencyName",b);
            }
        }
    }
};


