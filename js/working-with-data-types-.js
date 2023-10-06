let a = 1;
console.log(a)
let b = a++;
console.log(b)
let c = ++a;
console.log(c)

let d ="hello";
let e = false;
d++;
e++;
console.log(d)
console.log(e)

let perplexed;
perplexed + 2;
console.log(perplexed)

//let price = 2.7;
//console.log(price.toFixed(2));

//let price = "2.7";
//console.log(price.toFixed(2));

num1 = isNaN(0)
console.log(num1)
num2 = isNaN(1)
console.log(num2)
num3 = isNaN("")
console.log(num3)
num4 = isNaN("string")
console.log(num4)
num5 = isNaN("0")
console.log(num5)
num6 = isNaN("1")
console.log(num6)
num7 = isNaN("3.145")
console.log(num7)
num8 = isNaN(Number.MAX_VALUE)
console.log(num8)
num9 = isNaN(Infinity)
console.log(num9)
num10 = isNaN("true")
console.log(num10)
num11 = isNaN(true)
console.log(num11)
num12 = isNaN("false")
console.log(num12)
num13 = isNaN(false)
console.log(num13)

console.log(" ")

fal0 = !true
console.log(fal0)
fal1 =!false
console.log(fal1)
fal2 = !!true
console.log(fal2)
fal3 = !!false
console.log(fal3)
fal4 = !!0
console.log(fal4)
fal5 = !!-0
console.log(fal5)
fal6 = !!1
console.log(fal6)
fal7 = !!-1
console.log(fal7)
fal8 = !!0.1
console.log(fal8)
fal9 =!!"hello"
console.log(fal9)
fal10 = !!""
console.log(fal10)
fal11 = !!''
console.log(fal11)
fal12 = !!"false"
console.log(fal12)
fal13 = !!"0"
console.log(fal13)

let sample = "Hello Codeup";
let endOf =(sample.length)
console.log(sample.length)

console.log(sample.toUpperCase())

let Sample = sample  + " Student";
console.log(Sample)

console.log(Sample.replace("Student","Class"));

console.log(Sample.indexOf('c'));

let beginOf = Sample.indexOf('C');
console.log(Sample.indexOf('C'))

console.log(Sample.indexOf("p"));
console.log(Sample.substring(Number(beginOf),Number(endOf)))

let rent1 = 3
let rent2 = 5
let rent3 = 1
let totalRent =Number(rent1) + Number(rent2) + Number(rent3);
console.log(Number(totalRent * 3));

let google = 400 * 10;
let amazon = 380 * 6;
let facebook = 350 * 4;
console.log(Number(google + amazon + facebook))

let username = 'codeup';
let password = 'notastrongpassword';

let morethan5 = console.log(password.length >= 5);
let noUsername = console.log(password.toLowerCase().includes(username.toLowerCase()));
let noMore20 = console.log(username.length <= 20);
let noStartWhiteSpace = username[0] !== " " && password[0] !== " ";
console.log(noStartWhiteSpace)
let noEndWithSpace = username[username.length - 1] !== " " && password[password.length - 1] !== " ";
console.log(noEndWithSpace)

let answer = confirm(yes or no?);
console.log(answer);
