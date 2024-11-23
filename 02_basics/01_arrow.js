const user = {
  username: "abhishek",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // string interpolation
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // in node this points to empty object = {} wheras in browser it point to global object

function testThisInFun() {
  let username = "abhishek";
  console.log(this); // in browser is points to glbal object
}

testThisInFun();

// const chai = function () {
//     let username = "abhishek"
//     console.log(this.username);
// }

const chai = () => {
  let username = "abhishek";
  console.log(this);
};

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "abhishek" });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
