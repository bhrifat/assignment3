//Conversion to Kilometer to meter
function kelometerToMeter(km) {
    //Checking the input is number or string
    if (typeof km !== "number") {
        return "Error: You can input number only!";
    }
    // Checking the number is positive or negative
    else if (km < 0) {
        return "Error: Input a positive number!";
    } else {
        let meter = km * 1000;
        return meter;
    }
}
console.log(kelometerToMeter(10));







//Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    //Checking the input is number or string
    if (typeof watch !== "number" || typeof phone !== "number" || typeof laptop !== "number") {
        return "Error: You can input number only!";
    }
    // Checking the number is positive or negative
    else if (watch < 0 || phone < 0 || laptop < 0) {
        return "Error: Input a positive number!";
    } else {
        let watchPrice = 50 * watch;
        let phonePrice = 100 * phone;
        let laptopPrice = 500 * laptop;
        let totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
let GetTotalPrice = budgetCalculator(7, 9, 3);
console.log(GetTotalPrice);


//Mega Friend
var friendsName = ["Badrul", "Hasan", "Rifaaaaaaat", "Tahia", "Sagor", "Atik"];

function megaFriend(friendsName) {
    let longestName = friendsName[0];
    // Checking Array is empty or not
    if (friendsName.length === 0 || Array.isArray(friendsName) === false) {
        return "Error: This is not an Array or empty Array";
    }
    //Checking Array Element is enough or not
    else if (friendsName.length < 1) {
        return "Error: You do not have enough element";
    } else {
        for (i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length > longestName.length) {
                longestName = friendsName[i];
            }
        }
        return longestName;
    }
}
console.log(megaFriend(friendsName));



// Hotel Cost Calculator
function hotelCost(totalDay) {
    var totalCost = 0;
    // Checking the number is positive or negative
    if (totalDay < 0) {
        return "Error: Input a positive number!";
    } else {
        if (totalDay <= 10) {
            totalCost = totalDay * 100;
        } else if (totalDay <= 20) {
            var basicRent = 10 * 100;
            var remaining = totalDay - 10;
            var minDiscount = remaining * 80;
            totalCost = basicRent + minDiscount;
        } else {
            var basicRent = 10 * 100;
            var minDiscount = 10 * 80;
            var remaining = totalDay - 20;
            var maxDiscount = remaining * 50;
            totalCost = basicRent + minDiscount + maxDiscount;
        }
        return totalCost;
    }
}
console.log(hotelCost(21));