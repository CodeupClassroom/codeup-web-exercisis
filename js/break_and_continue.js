let userPrompt;
do {
    userPrompt = parseFloat(prompt("Please enter an odd number"));
} while(userPrompt % 2 !== 1)


for (let i = 1; i < 50; i = i + 2) {
    console.log("here is an odd number " + i)
}
