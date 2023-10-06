console.log("Hello from external JavaScript")
let welcome = alert("Welcome to my Website!");
console.log(welcome)

let favcolor = prompt("what is your favorite color?");
alert(favcolor + " is my favorite color too!")

let movie1 = prompt("How many days did you rent The Little Mermaid?");
let rent1 = prompt("How much was the rent per day for this movie?");
alert("you owe" + " " + Number(movie1) * Number(rent1) + " Dollars")

let movie2 = prompt("How many days did you rent Brother Bear?");
let rent2 = prompt("How much was the rent per day for this movie?");
alert("you owe" + " " + Number(movie2) * Number(rent2) + " Dollars")

let movie3 = prompt("How many days did you rent Hercules?");
let rent3 = prompt("How much was the rent per day for this movie?");
alert("you owe" + " " + Number(movie3) * Number(rent3) + " Dollars")

let googlehourlypay = prompt("How much does Google pay a hour?");
let googlehoursworked = prompt("How many hours did you work this week at Google?");
let googleTotal = Number(googlehourlypay) * Number(googlehoursworked)
alert("you will be paid " + Number(googleTotal) + " from Google")

let amazonhourlypay = prompt("How much does Amazon pay a hour?");
let amazonhoursworked = prompt("How many hours did you work this week at Amazon?");
let amazonTotal = Number(amazonhourlypay) * Number(amazonhoursworked)
alert("you will be paid " + Number(amazonTotal) + " from Amazon")

let facebookhourlypay = prompt("How much does Facebook pay a hour?");
let facebookhoursworked = prompt("How many hours did you work this week at Facebook?");
let facebookTotal = Number(facebookhourlypay) * Number(facebookhoursworked)
alert("you will be paid " + Number(facebookTotal) + " from Facebook")

let weekTotal = +googleTotal + +amazonTotal + +facebookTotal;
alert("you made " + Number(weekTotal) + " this week!")

