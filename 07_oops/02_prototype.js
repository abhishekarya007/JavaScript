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
