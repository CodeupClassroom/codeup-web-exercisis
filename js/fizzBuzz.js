const fizzBuzz = (start,end) => {
    for(let start = 1; start <= end; start++){
        let div3 = Number(start%3)
        let div5 = Number(start%5)
        if(div3 === 0 && div5 === 0){
            console.log('FizzBuzz')
        }else if(div5 === 0){
            console.log('Buzz')
        }else if(div3 === 0){
            console.log('fizz')
        }else{
            console.log("divide by neither" + start)
        }
    }
}

fizzBuzz(1,100)