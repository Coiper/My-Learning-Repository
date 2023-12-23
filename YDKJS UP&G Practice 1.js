var totalPrice = 0;
const priceOfPhone = 100;
const accessoryPrice = 10;
var accessoryAmount = 0;
var phonesAmount = 0;
const TAX_RATE = 0.08;
priceOfPhone = priceOfPhone + (priceOfPhone * TAX_RATE);
accessoryPrice = accessoryPrice + (accessoryPrice * TAX_RATE);
console.log(priceOfPhone);
console.log(accessoryPrice);
/* var budget = prompt("How much money do you have?");
budget = Number(budget); */
budget = 400;
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