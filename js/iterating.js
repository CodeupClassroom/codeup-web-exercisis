(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let name = ["octavious","raekwon","xavier","carlos",];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(name.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(name[0])
    console.log(name[1])
    console.log(name[2])
    console.log(name[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(let i =0; i < name.length; i++){
    console.log(name[i])
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
name.forEach((name => console.log(name)))

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    const numbers = ["1","2","3","4","5"]

    const first = (array) => {
        let result = array[0]
        return result
    }

    const second = (array) => {
        let result = array[1]
        return result
    }

    const last = (array) => {
        let arrayLength = array.length
        let result = array[arrayLength - 1]
        return result
    }
})();
