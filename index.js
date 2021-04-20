var readline = require('readline-sync');

//Ask user for the integers
var firstNum = Number(readline.question("What is the first number? "));
var secondNum = Number(readline.question("What is the second number? "));

//Iinitalize variables
var z;
var y;
var x; 

//Call the calculate function with the provided integers
Calculate(firstNum, secondNum);

//Calculation function
function Calculate(a, b) {
    if (a > b) {
        x = a + b
        x++;
        y = x - (a^2/(b + 4))
        z = y * x * a * b
        if (y > x) {
            x = eval(z);
            y++;
            console.log(eval(a + b));
        } else {
            z = y^2 - a / 5(4 -a);
            while (z <= a) {
                z++;
            }
            console.log(eval(a + b));
        }
    } else if ((a - (23 * (b / 35))) <= (b / (b * 3))) {
        console.log(eval(a + b));
    } else {
        console.log(eval(a + b));
    }
};