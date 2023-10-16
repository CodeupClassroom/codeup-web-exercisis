console.log('hey')

//for loop
for(let i = 0;i <= 10;i++) {
    console.log(`the code ran at the index ${i}`);
}
//while loop

let i = 0
while(i <= 10) {
    console.log("the code ran at", i);
    i++
}

//do while loop

let myNumber = 0;
do {
    console.log(myNumber);
    myNumber++
}while(myNumber <= 10);


//loop in a loop
const buildRow = (num) =>{
    let result = ""
    for(let i = 0; i < num; i++){
        result += "*"
    }
    result += "\n"
    return result;
}
const buildPrymaid = (rows) =>{
    let result = "";
    for (let i = 1; i <= rows; i++){
        result += buildRow(i)
    }
    return result;
}
let prymaid = buildPrymaid(5)
console.log(prymaid)