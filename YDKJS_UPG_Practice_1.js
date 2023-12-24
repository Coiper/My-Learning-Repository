var totalPrice = 0;
var priceOfPhone = 100;
var accessoryPrice = 10;
var accessoryAmount = 0;
var phonesAmount = 0;
const TAX_RATE = 0.08;
priceOfPhone = priceOfPhone + (priceOfPhone * TAX_RATE);
accessoryPrice = accessoryPrice + (accessoryPrice * TAX_RATE);
// var budget = prompt("How much money do you have?");
budget = 400;
budget = Number(budget);
function calculate() {
    while (budget > priceOfPhone) {
        budget -= priceOfPhone;
        phonesAmount += 1;
        totalPrice += priceOfPhone;
        if (budget > priceOfPhone * 2) {
            budget -= accessoryPrice;
            accessoryAmount += 1;
            totalPrice += accessoryPrice;
        }
        console.log("You bought " + phonesAmount + " phone." + " Your budget now: "+ budget);
    }
    console.log("Total price: $" + totalPrice + " Your budget now: " + budget);
    console.log("You bought " + phonesAmount + " phones and " + accessoryAmount + " accessories.")
}
calculate();