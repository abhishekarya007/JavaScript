const fname = "abhishek";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${fname} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String("abhishek-dot-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   abhishek    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhishek.com/abhishek%20arya";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

let lname = "kum";
let concatedStr = lname.concat("ar"); // it returns the concated string , doesn't replace string lname
console.log(lname);
console.log(concatedStr);

const test = "abhishek";

console.log(test.substring(5, 8));
console.log(test.slice(-8, -6));

//substring and slice have same function , it's just that slice supports -ve indexes
//parameters start and end index
