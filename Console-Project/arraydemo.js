const numbers = [1, 2, 2, 3, 4, 4, 7, 7, 11, 88, 9, 5, 9, 7, 12, 88];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);  

// changes done to code
// used diff method this time filter() and indexOf()

const numbers1 = [1, 2, 2, 3, 4, 4, 7, 7, 11, 88, 9, 5, 9, 7, 12, 88];
const uniqueNumbers1 = numbers1.filter((num, index) => numbers1.indexOf(num) === index);
console.log(uniqueNumbers1);  
