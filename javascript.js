let resetButton = document.getElementById("reset");
let calcButton = document.getElementById("calculate");
let grossComm = document.getElementById("gctotal");
let sellComm = document.getElementById("sctotal");
let listComm = document.getElementById("lctotal");

let purchasePrice = document.getElementById("pprice");
let firstOne = document.getElementById("firstonehundred");
let grossPercent = document.getElementById("grosspercentage");
let buyerOne = document.getElementById("buyeronehundred");
let buyerPercent = document.getElementById("buyerpercentage");


resetButton.addEventListener('click', function(){
    purchasePrice.value = '';
    firstOne.value = '';
    grossPercent.value = '';
    buyerOne.value = '';
    buyerPercent.value = '';
    listComm.innerHTML = '';
    sellComm.innerHTML = '';
    grossComm.innerHTML = '';
})

calcButton.addEventListener('click', function(){
    if (purchasePrice.value >= 100000) {
        let finalGross = (100000 * (firstOne.value * 0.01)) + ((purchasePrice.value-100000) * (grossPercent.value * 0.01))
        grossComm.innerHTML = Math.round((finalGross + Number.EPSILON) * 100)/100
        let finalBuyer = (100000 * (buyerOne.value * 0.01)) + ((purchasePrice.value-100000) * (buyerPercent.value * 0.01))
        sellComm.innerHTML = Math.round((finalBuyer + Number.EPSILON) * 100)/100
        roundedList = finalGross - finalBuyer;
        listComm.innerHTML = Math.round((roundedList + Number.EPSILON) * 100)/100
    } else if (purchasePrice.value < 100000) {
        let finalGross = (purchasePrice.value * (firstOne.value * 0.01));
        grossComm.innerHTML = Math.round((finalGross + Number.EPSILON) * 100)/100
        let finalBuyer = (purchasePrice.value * (buyerOne.value * 0.01))
        sellComm.innerHTML = Math.round((finalBuyer + Number.EPSILON) * 100)/100
        roundedList = finalGross - finalBuyer;
        listComm.innerHTML = Math.round((roundedList + Number.EPSILON) * 100)/100
    }
})

let darkButton = document.getElementById("dark")
let lightButton = document.getElementById("light")
let allInput = document.querySelectorAll("input")

darkButton.addEventListener('click', function() {
    var element = document.body;
    element.classList.add("dark-mode");
    allInput.forEach(function(x) {
        x.style.color = 'white';
        x.style.backgroundColor = 'black';
    })
});

lightButton.addEventListener('click', function() {
    var element = document.body;
    element.classList.remove("dark-mode");
    allInput.forEach(function(x) {
        x.style.color = 'black';
        x.style.backgroundColor = 'white';
    })
});

let stopButton = document.getElementById("stop-background");

stopButton.addEventListener('click', function() {
    let allHouses = document.getElementById("house-container");
    allHouses.remove()
})