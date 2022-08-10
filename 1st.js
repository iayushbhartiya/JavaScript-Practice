// type conversion - explicitly converting the datatype of the object 

let a = Number('12');
console.log(a, typeof a)

// type coercion - javscript engine is smart enough to convert the datatype of object 
// based on the requirement

let x = 7;
y = x + "a";

console.log(y, typeof y); 

// this will convert x into string first then concatenate both the string 

let num = '5';

res = num - 3;

console.log(res, typeof res);

// first javascript engine convert num in integer datatype then it will apply 
// the arithmetic operator 

let str = parseInt('123Ayush');

console.log(str);

//  parseint function accepts the object as string then extract int from that string
// providing int should be in the starting of the string otherwise it will print NaN

// -------------Boolean value------------------------------------------------
let num1 = true;
let num2 = true;

console.log(num1 + num2);
console.log(num1-num2);

// this will print 2 as default value of true is 1 and of false is 0 so 1+1 = 2 & 1-1= 0
