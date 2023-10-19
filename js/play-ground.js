function add (num1,num2) {
    if(!isNaN(num1) && !isNaN(num2) || typeof num1 === 'number' && typeof num2 === 'number'){
        let num3 = Number(num1)
        let num4 =Number(num2)
        return num3 + num4
    }else{
        return false
    }
}
console.log(add('2','3'))