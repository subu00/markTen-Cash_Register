const billAmount = document.querySelector(".bill-amount")
console.log(billAmount.value)
const cashGiven = document.querySelector('.cash-given')
console.log(cashGiven.value)
const checkButton = document.querySelector(".check-button")
const message = document.querySelector(".error-message")
const tableNotes = document.querySelectorAll(".table-notes")


// Store the notes in an array
const notes = [2000,500,100,20,10,5,1]




// Validating the Bill and check amount 

function validateCheckAndBill() {
    message.style.display = "none";
    //  This ensures that the message will not stay when we click on the check button
    if (billAmount.value < 0) {
        message.innerText ="The Bill amount should be greater than 0"
        message.style.display ="block"; 

    } else if(cashGiven.value <= billAmount.value) {
        message.innerText ="Please Provide more cash. Insufficent Cash"
        message.style.display ="block";

    } else if(cashGiven.value >= billAmount.value) {
        // Main Logic
        //  1) Calculate the difference
        const amountToReturn = cashGiven.value - billAmount.value
        //2 ) Return minimum number for notes .. for that we will divide the 
        // amount to return with every notes(2000,500,100,20,5,1,10)
        calculateChange(amountToReturn)
    }
}


function calculateChange(amountToReturn) {
    // Get the number of notes 
 for (let i =0; i < notes.length; i++) {
     const numberofNotes = Math.trunc(amountToReturn / notes[i] )
 
 amountToReturn = amountToReturn % notes[i]; // update the amount 
 tableNotes[i].innerText = numberofNotes; // update the notes in table
}
}







checkButton.addEventListener('click', validateCheckAndBill)