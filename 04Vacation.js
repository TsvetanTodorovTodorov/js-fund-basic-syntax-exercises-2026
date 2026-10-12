function solve(number, type, day) {
    // day == "Friday" "Saturday" "Sunday"
    let totalPrice = 0;
    if (day == "Friday") {
        if (type == "Students") {
            totalPrice = 8.45 * number;
            if (number >= 30) {
                totalPrice *= 0.85;
            } 
        } else if (type == "Business") {
            if (number >= 100) {
                number -= 10;
            }
            totalPrice = 10.90 * number;
        } else if (type == "Regular") {
            totalPrice = 15 * number;
            if (number >= 10 && number <= 20) {
                totalPrice *= 0.95;
            }
        }
    } else if (day == "Saturday") {
        if (type == "Students") {
            totalPrice = 9.80 * number;
            if (number >= 30) {
                totalPrice *= 0.85;
            } 
        } else if (type == "Business") {
            if (number >= 100) {
                number -= 10;
            }
            totalPrice = 15.60 * number;
        } else if (type == "Regular") {
            totalPrice = 20 * number;
            if (number >= 10 && number <= 20) {
                totalPrice *= 0.95;
            }
        }
    } else if (day == "Sunday") {
        if (type == "Students") {
            totalPrice = 10.46 * number;
            if (number >= 30) {
                totalPrice *= 0.85;
            } 
        } else if (type == "Business") {
            if (number >= 100) {
                number -= 10;
            }
            totalPrice = 16 * number;
        } else if (type == "Regular") {
            totalPrice = 22.50 * number;
            if (number >= 10 && number <= 20) {
                totalPrice *= 0.95;
            }
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);  
}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
