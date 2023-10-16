let i = 1
while(i < 65536){
    i = i * 2
    console.log(i)
}

const randomNum = (min,max) => {
    return pareInt(math.random() * (max - min) + min);
};


let conesLeft = randomNum(50, 100);
do {
    const conesToSell = randomNum(1, 5);
    if (conesLeft >= conesToSell) {
        // sell the cones
        console.log(`${conesToSell} cones sold..`);
        conesLeft = conesLeft - conesToSell;
    } else {
        // don't have that many cones
        console.log(`I don't have that many cones. I only have ${conesLeft} cones.`);
        // sell them the remaining cones IF you have any
        conesLeft = 0;
        console.log(`Yay! I have sold all of the cones.`);
    }
} while (conesLeft > 0);