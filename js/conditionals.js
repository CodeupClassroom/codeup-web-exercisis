"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
let analyzeColor = (color) => {
    if(color === 'blue'){
        return "blue is the color of the sky"
    }
    else if(color === 'black'){
        return "black is my favorite color"
    }
    else if(color === 'red'){
        return "my friend has a red car"
    }
    else {
        return "I dont like that color"
    }
}
// console.log(analyzeColor("black"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor)
// console.log(analyzeColor(randomColor))

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// let switchColor = randomColor
// switch (switchColor.toLowerCase()){
//     case "blue":
//         console.log("that is the color of the sky")
//         break;
//     case "yellow":
//         console.log("that is my favorite color")
//         break;
//     case "green":
//         console.log("that's the color of money")
//         break
//     default:
//         console.log("I don't really like that color")
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
let userColor = prompt("what is you're favorite color?")
analyzeColor(userColor)
alert((analyzeColor(userColor)))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const Num = ['0','1','2','3','4','5'];
const randomNum = Num[Math.floor(Math.random() * Num.length)];

const calculateTotal = () => {
    let totalAmount = prompt("what was you're total?")
    if (luckyNumber === 0) {
        let finalPrice = 1 * Number(totalAmount)
        alert("you're final price is " + finalPrice)
    } else if(luckyNumber === 1){
        let discount = .10 * Number(totalAmount)
        let finalPrice = Number(totalAmount) - Number(discount)
        alert("you're final price is " + finalPrice)
    } else if (luckyNumber === 2) {
        let discount = .25 * Number(totalAmount)
        let finalPrice = Number(totalAmount) - Number(discount)
        alert("you're final price is " + finalPrice)
    } else if (luckyNumber === 3){
        let discount = .35 * Number(totalAmount)
        let finalPrice = Number(totalAmount) - Number(discount)
        alert("you're final price is " + finalPrice)
    } else if (luckyNumber === 4){
        let discount = .50 * Number(totalAmount)
        let finalPrice = Number(totalAmount) - Number(discount)
        alert("you're final price is " + finalPrice)
    } else{
        alert("it's free!!")
    }
}
//calculateTotal(randomNum)

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6;
 const luckyNumber = Math.floor(Math.random() * 6);
 alert(luckyNumber)
calculateTotal(luckyNumber)

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
let yesOrNo = confirm("would you like to enter a number?")
while (yesOrNo === false){
    yesOrNo = confirm("you need to enter a number first")
}
let enteredNumber = prompt("what is you're number?")
let oddOrEven = Number(enteredNumber) % 2
if (Number(oddOrEven) == 0){
    alert("you're number is even")
} else {
    alert("you're number is odd")
}

let plus100 = Number(enteredNumber) + Number(100)
    alert("you're number plus 100 is " + plus100)

let posOrNeg = Math.sign(enteredNumber)
if (posOrNeg === 1 ){
    alert("you're number is positive")
} else {
    alert("you're number is negative")
}