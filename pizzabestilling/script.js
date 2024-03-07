// Henter elementer fra DOM
let pizzabunnEls = document.querySelectorAll('input[type="radio"]')

let toppingEls = document.querySelectorAll('input[type="checkbox"]')

let storrelseEl = document.querySelector('select')

let annetEl = document.querySelector('textarea')

let submitBtn = document.querySelector('button[type="submit"]')

submitBtn.addEventListener("click", function(e){
    // Avbryter skjemaet sin normale utsending av data
    //e.preventDefault()
    console.log("Sender din bestilling")

    // Lager et pizza-objekt
    let pizza = {}

    // Går gjennom pizzabunn
    for(let i=0; i<pizzabunnEls.length; i++){
        // Sjekker hvilken pizzabunn som er markert
        if(pizzabunnEls[i].checked){
            pizza.bunn = pizzabunnEls[i].value
        }
    }

    // Traverser arrayet med topping, og finn hvilke som er krysset av
    // Lag et array med topping. Disse skal legges inn som verdi i pizza-objektet tilhørende key "topping"

    console.log(pizza)

    let toppingArr = []

    toppingEls.forEach(toppingEl => {
        if(toppingEl.checked){
            toppingArr.push(toppingEl.value)
        }
    })

    pizza.topping = toppingArr

    // Henter størrelse 

    pizza.storrelse = storrelseEl.value

    // Henter annen informasjon
    pizza.annet = annetEl.value
})