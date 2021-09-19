const billAmount = document.querySelector(".bill-amount")
const cashGiven = document.querySelector('.cash-given')
const checkButton = document.querySelector(".check-button")
const message = document.querySelector(".error-message")
const tableNotes = document.querySelectorAll(".table-notes")


// Store the notes in an array
const notes = [2000,500,100,20,10,5,1]




// Validating the Bill and check amount 

function validateCheckAndBill() {
    message.style.display = "none";
    //  This ensures that the message will not stay when we click on the check button
        if(billAmount.value ==="" || cashGiven.value ==="") {
            message.textContent = "Invalid Bill Amount"
            message.style.display ="block"
        } 
    
    else if (billAmount.value <= 0 || cashGiven.value <= 0 || (billAmount.value < 0 && cashGiven.value <= 0) || (cashGiven.value === billAmount.value) ) {
        message.innerText ="Please enter a positive value"
        message.style.display ="block"; 

    } else if(Number(cashGiven.value) < Number(billAmount.value)) {
        message.innerText ="Please Provide more cash. Insufficent Cash.  Else Wash the Dishes 🍽️🍽️ 😭😭  "
        message.style.display ="block";

    } else if(cashGiven.value >= billAmount.value || ((billAmount.value >= cashGiven.value) )) {
        // Main Logic
        //  1) Calculate the difference
        const amountToReturn = cashGiven.value - billAmount.value
        //2 ) Return minimum number for notes .. for that we will divide the 
        // amount to return with every notes(2000,500,100,20,5,1,10)
        calculateChange(amountToReturn)
        message.innerText =`Amount to be returned: ${amountToReturn}`
        message.style.display ="block"; 
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
