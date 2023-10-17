const findLargestNumber = (arr) => {
    if(!array.isArray(arr) && arr.length === 0){
        return false
    }
}

let largest = arr[0]

for(let number of arr){
    if number > largest){
    largest = number
    }
}

return= largest

(() => {
    const numbers = [42,17,8,94,23,61,12,51,6]
    const result = findLargestNumber(numbers);
    console.log(result)
})