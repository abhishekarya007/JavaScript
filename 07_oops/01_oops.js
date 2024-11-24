const user = {
  username: "abhishek",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.getUserDetails());
// console.log(this); // {} -> global obj

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(this.loginCount);

    console.log(`Welcome ${this.username}`);
  };
}

// class User {
//   constructor(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
//     this.greeting = function () {
//       console.log(`Welcome ${this.username}`);
//     };
//   }
// }
// -> both are equivalent

const user1 = new User("abhishek", 9, true);
const user2 = new User("arya", 10, true);

user1.loginCount = 10;
user1.greeting();
user2.greeting();
