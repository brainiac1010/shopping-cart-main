function getTextElementValueById(elementId) {

    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElemetValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function  calculateSubTotal(){

        // calculate total
const currentPhoneTotal = getTextElementValueById('phone-total');
const currentCaseTotal = getTextElementValueById('case-total');

const currentSubTotal = currentPhoneTotal + currentCaseTotal;
setTextElemetValueById('sub-total', currentSubTotal);




// calculat tax
const taxAmountString =(currentSubTotal*0.1).toFixed(2);
const taxAmount =parseFloat(taxAmountString);

setTextElemetValueById('text-amount',taxAmount);

const finalAmount = currentSubTotal + taxAmount;
setTextElemetValueById('final-total',finalAmount);
}