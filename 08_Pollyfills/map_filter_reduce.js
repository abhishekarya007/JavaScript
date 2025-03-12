//Reduce

const age = [1, 2, 3, 4, 5];

let sum = age.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
//if 0 is not given it will take the first val
//o/p in both the cases will be same
console.log(sum);
// age = [10];
//**** we can't initialize but we can push/update date of it */
// age.push(10);
console.log(age);

//Pollyfill MAP

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const ans = age.myMap((val, i, arr) => {
  return val * 2;
});
console.log(ans);

//Pollyfill FILTER

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const fil = age.myFilter((val, i, arr) => {
  return val % 2 == 0;
});
console.log(fil);

//Pollyfill REDUCE

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i]; // FOCUS HERE
  }

  return acc;
};

const ansRed = age.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 2);

console.log(ansRed);

//map vs forEach
//In map chaining is possible like filter or map or reduce
//forEach doesn't return anything
//we can use forEach to modify the same arr
