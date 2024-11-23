// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Abhishek",
  "full name": "Abhishek Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "abhishek@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "abhishek@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "abhishek@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); //IMP we get JsUser reference in this keyword here
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
