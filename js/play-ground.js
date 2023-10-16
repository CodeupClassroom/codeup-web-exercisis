        alert("Welcome to The Land of Monsters!")
let newUser = confirm("Are You A New User?")
if (newUser === true) {
    alert("UserName can't contain special characters")
}

userName = "&"
 while(userName !== /[^a-zA-Z0-9]/.test(userName)){
     userName = prompt("enter valid username")
 }