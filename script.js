var user = [
  {
    username: "E",
    password: "1234",
  }
];

var timeline = [
  {
    userName: "Jilly",
    post: "today is a great day to learn JavaScript",
  },

  {
    userName: "Billy",
    post: "taking my programming to the next level!",
  },
];

var namePrompt = prompt("what is your name?");
var passwordPrompt = prompt("what is you password?");

function signIn(name, pass) {
  if (name === user[0].username && pass === user[0].password){
    console.log(timeline);
  } else {
    console.log("user name or password is wrong");
  }
};

signIn(namePrompt,passwordPrompt);

// this was me practicing how to use objects and arrays and the prompt function.
//  also practicing how to use params and arguments. 
// we will be software engineers!!!!