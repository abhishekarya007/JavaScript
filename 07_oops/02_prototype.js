//what is prototype?
//Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//Every object in JavaScript has a built-in property, which is called its prototype.
//The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.

//When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property.
//If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

//reference
//Js goes from parent to grandparent to grand-grand-parent... to look for methods / variables

// Array | strings | functions | class -> Obj -> null

Object.prototype.abhishek = () => {
  console.log("Abhishek function is available here...");
};

// [].abhishek();
// "".abhishek();

function test() {
  console.log("Calling abhishek function...");
}

// test.abhishek();

class test2 {
  print = () => {
    console.log("calling abhishek func in class method..");
  };
}

const testObj = new test2();
// testObj.print();
// testObj.abhishek();

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

// modern syntax Inheritece
Object.setPrototypeOf(TeachingSupport, Teacher); // TeachingSupport inherites from Teacher
console.log(TeachingSupport.makeVideo);
