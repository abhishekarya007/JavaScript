var name1 = "Arya";

const user = {};

user.name = "Abhishek";
user.email = "abhishek@arya.com";
user.phone = [7324046942, 9089764532];
user.getName = function () {
  return this.name;
};
user.arrow = () => {
  //we will get undefined here because we don't get obj reference in arrow function
  // return name will return Arya taking from global environment
  console.log(this); // point to global obj which is {}

  return this.name;
};

user.greet = function () {
  console.log(`good morning ${this.arrow()}`);
};

// console.log(user);

// user.greet();

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const finalObj = { ...obj1, ...obj2, ...obj3 };

// console.log(finalObj);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)); // arr of arr with [[key,val]]

// console.log(user.hasOwnProperty('isLoggedIn'));

//Destructuring

const { name: n, email } = user;

// console.log(n, email);
