let resetButton = document.getElementById("reset");
let calcButton = document.getElementById("calculate");
let grossComm = document.getElementById("gctotal");
let sellComm = document.getElementById("sctotal");
let listComm = document.getElementById("lctotal");

let purchasePrice = document.getElementById("pprice");
let firstOne = document.getElementById("firstonehundred");
let grossPercent = document.getElementById("grosspercentage");
let additionalBonus = document.getElementById("additionalbonus");
let deductions = document.getElementById("minusdeductions");
let buyerOne = document.getElementById("buyeronehundred");
let buyerPercent = document.getElementById("buyerpercentage");
let buyerAdditional = document.getElementById("buyeradditionalbonus");
let buyerDeduct = document.getElementById("buyerminusdeductions")

resetButton.addEventListener('click', function(){
    purchasePrice.value = '';
    firstOne.value = '';
    grossPercent.value = '';
    additionalBonus.value = '';
    deductions.value = '';
    buyerOne.value = '';
    buyerPercent.value = '';
    buyerAdditional.value = '';
    buyerDeduct.value = '';
})

calcButton.addEventListener('click', function(){
    if (purchasePrice.value >= 100000) {
        let finalGross = (100000 * (firstOne.value * 0.01)) + ((purchasePrice.value-100000) * (grossPercent.value * 0.01)) + additionalBonus.value - deductions.value;
        grossComm.innerHTML = Math.round((finalGross + Number.EPSILON) * 100)/100
        let finalBuyer = (100000 * (buyerOne.value * 0.01)) + ((purchasePrice.value-100000) * (buyerPercent.value * 0.01)) + buyerAdditional.value - buyerDeduct.value;
        sellComm.innerHTML = Math.round((finalBuyer + Number.EPSILON) * 100)/100
        roundedList = finalGross - finalBuyer;
        listComm.innerHTML = Math.round((roundedList + Number.EPSILON) * 100)/100
    } else if (purchasePrice.value < 100000) {
        let finalGross = (purchasePrice.value * (firstOne.value * 0.01)) + additionalBonus.value - deductions.value;
        grossComm.innerHTML = Math.round((finalGross + Number.EPSILON) * 100)/100
        let finalBuyer = (purchasePrice.value * (buyerOne.value * 0.01)) + buyerAdditional.value - buyerDeduct.value;
        sellComm.innerHTML = Math.round((finalBuyer + Number.EPSILON) * 100)/100
        roundedList = finalGross - finalBuyer;
        listComm.innerHTML = Math.round((roundedList + Number.EPSILON) * 100)/100
    }
})

