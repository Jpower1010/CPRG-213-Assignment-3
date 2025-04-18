/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let dayCounter = 0;
let element;
dailyRate = 35;
let weeklyCost;
let monday;
tuesday = false
wednesday = false
let thursday = false;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

document.getElementById("monday").addEventListener("click", mondayClicked);
document.getElementById("tuesday").addEventListener("click", tuesdayClicked);
document.getElementById("wednesday").addEventListener("click", wednesdayClicked);
document.getElementById("thursday").addEventListener("click", thursdayClicked);
document.getElementById("friday").addEventListener("click", fridayClicked);
function mondayClicked() {
    if (monday === false);
        monday = true
        dayCounter += 1
    alert(dayCounter)
    document.getElementById("monday").classList.add("clicked");
    recalculate()
}
function tuesdayClicked() {
    if (tuesday = false);
        tuesday = true
        dayCounter += 1
    alert(dayCounter)
    document.getElementById("tuesday").classList.add("clicked");
    recalculate()
}
function wednesdayClicked() {
    if (wednesday = false);
        wednesday = true
        dayCounter += 1
    alert(dayCounter)
    document.getElementById("wednesday").classList.add("clicked");
    recalculate()
}
function thursdayClicked() {
    if (thursday = false)
        thursday = true
        dayCounter += 1
    
    alert(dayCounter)
    document.getElementById("thursday").classList.add("clicked");
    recalculate()
}
function fridayClicked() {
    if (friday = false);
        friday = true
        dayCounter += 1
    alert(dayCounter)
    document.getElementById("friday").classList.add("clicked");
    recalculate()
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
document.getElementById("clear-button").addEventListener("click", clearClicked);
function clearClicked() {
    alert(dayCounter)
    document.getElementById("clear-button").classList.remove("clicked");
    weeklyCost = 0
}





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
document.getElementById("half").addEventListener("click", halfClicked);
function halfClicked() {
    alert(dayCounter)
    document.getElementById("full").classList.remove("clicked");
    document.getElementById("half").classList.add("clicked");
    dailyRate = 20
    recalculate()
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

document.getElementById("full").addEventListener("click", fullClicked);
function fullClicked() {
    alert(dayCounter)
    document.getElementById("half").classList.remove("clicked");
    document.getElementById("full").classList.add("clicked");
    dailyRate = 35
    recalculate()
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
    weeklyCost = dailyRate * dayCounter
    document.getElementById("calculated-cost").innerHTML = weeklyCost
}


