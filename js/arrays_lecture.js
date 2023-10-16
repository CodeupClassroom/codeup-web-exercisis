const fruits = ["orange","strawberry", "kiwi", "tomato", "banana","blueberry"]

const firstFruit = fruits[0];
const nmrOfFruits = fruits.length;

for(let i = 0; i < nmrOfFruits; i++){
    const fruit = fruits[i]
    if(fruit.includes("berry"))
    console.log(fruit);
}

for(let fruit of fruits){
    if (fruit.includes("berry")){
        console.log(fruit);
    }
}

fruits.forEach((fruit,index,array) => {
    if(fruit.includes("berry")) {
        console.log(fruit)
    }
})

(()=>{

})()

//IIFE

    (() =>{
        const daysOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday"]

        let myName = "octavious"
        let myNameUpper = myName.toUpperCase()

        daysOfTheWeek.push("Friday")

        daysOfTheWeek.unshift("Sunday")
        //if saved into var will return number of items in array now


           // nameOfArray.pop to pop last element in array


           // nameOfArray.shift to pop first element

            // nameOfArray.indexOf(name of element)

            // nameOfArray.lastIndexOf(name of element)

            //nameOfArray.filter()
            //nameOfArray.slice()
            //nameOfArray.reverse()
            //nameOfArray.join("what you want to space it") will join string into array
            //nameOfArray.split("what you want to remove from the string")[2] pick out certain part



    })