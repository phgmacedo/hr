const re = /RegExp/;
const myString = 'We\'re learning about RegExps.';
const replacementString = 'Regular Expression';

console.log(myString);
console.log(myString.replace(re, replacementString));

//////////////

const re = /(.).*\1/;

const str1 = 'wxyz';
const str2 = 'wxyzw';
const str3 = 'wxyzx';
const str4 = 'wxywz';

console.log('substring:', str1.match(re));
console.log('substring:', str2.match(re)[0]);
console.log('substring:', str3.match(re)[0]);
console.log('substring:', str4.match(re)[0]);