// easy way = window prompt
// professional = html text box
/*
easy way
let username;
username = window.prompt("What is your username?"); // accepts user input and stores it in the variable username
console.log("Your username is: " + username);*/
document.getElementById("MySubmit").onclick = function() { // case sensitive so make sure to write it correctly
    //this helps decide what will happen when u click on the button
    username = document.getElementById("MyText").value; // so that it gets stored in that my text
    document.getElementById("MyH1").textContent = `Hello ${username}`; // this dollar only works with `` so its a good practice to use it
}


