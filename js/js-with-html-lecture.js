console.log(2+2)
let X = "12"
console.log(Number(X))

let y = 14
console.log(String(y))

let isEqual = "hey";
console.log(isNaN(isEqual));

let emptyString = "" == false;
console.log(emptyString)
let zero = 0 == false;
console.log(zero)

let username = "Justino(nova)";
let guildName;

let nameLength = username.length
console.log(nameLength)

let name = "tay";
name.replace("davis");
console.log(name)

let channelMessage = "username from the guildName guild has logged in.";
channelMessage = username + "from the " + guildName + " guild has logged in"
console.log(channelMessage)

channelMessage = `${username} from the ${guildName} + guild has logged in`
