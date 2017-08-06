const TAX_RATE = 0.08;
const PHONE_PRICE = 200;
const ACCESSORY_PRICE = 20;
const SPENDING_THRESHOLD = 500;

var bankAccountBalance = 600;

function calculateTax( amount ) {
    return amount * TAX_RATE;
}

function formatPrice( numericPrice ) {
    numericPrice = numericPrice.toFixed(2);
    price = "$" + numericPrice;
    return price;
}

var phoneAmount = 0;
var accessoriesAmount = 0;
var totalSpendings = 0;

while (totalSpendings < SPENDING_THRESHOLD ) {
    totalSpendings += PHONE_PRICE;
    if ( totalSpendings < SPENDING_THRESHOLD ) {
        totalSpendings += ACCESSORY_PRICE;
    }
}

totalSpendings += calculateTax( totalSpendings );
console.log("Total value is " + formatPrice( totalSpendings ));

if ( totalSpendings > bankAccountBalance ) {
    console.log("You can't have all this stuff you know!");
}
else {
    console.log("You can purchase all of them!");
}

