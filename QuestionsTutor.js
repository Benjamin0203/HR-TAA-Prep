//1getLongestOfThreeWords (Question in Module1 Part3 Conditionals 9)
//If there are ties, it should return the first word in the parameters list.
function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  var array = [word1,word2,word3];
  var maxLength = word1.length;
  var newWord = word1;
  for(var i=0;i<array.length;i++){
      if(array[i].length>maxLength){
        maxLength = array[i].length;
        newWord = array[i];
      }
  }
  return newWord;
}
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'


//2 Module1 Part3 Advanced 3
function select(arr, obj) {
  // your code here
  var newObj = {};
  for(i=0;i<arr.length;i++){
      var element = arr[i];
      for(keys in obj){
          if(keys === element){
            newObj[keys] = obj[keys];
          }
      }
  }
  return newObj;
}



//2  gi    /(\w+)\s(\w+)/    i    means?

let re = /apples/gi;   // gi letter case sensitive    Apple !== apple
let str = 'Apples are round, and apples are juicy.';
let newstr = str.replace(re, 'oranges');
console.log(newstr);  // oranges are round, and oranges are juicy.

//-----------------
let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John
//--------------
let str = 'Twas the night before Xmas...';    // i case insensitive   i ===I
let newstr = str.replace(/xmas/i, 'Christmas');
console.log(newstr);  // Twas the night before Christmas...    


//3 
//find the prime numbers
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


//4
//Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

//https://www.galvanize.com/web-development/technical-admissions-assessment#curriculum


//Method 1
function findPairForSum(integers, target) {
  var result =[];
  for(var i=0; i< integers.length; i++){
    var num = target - integers[i];
    if(integers.indexOf(num) !== -1){
      result.push(num);  
    }    
  } 
  return result;
}

// example
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

//Method 2

/*

Example:
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
*/
function findPairForSum(arr, sum) {
  var result;
  var seen = new Set();

  for (var i = 0; i < arr.length; i++) {
      var deff = sum - arr[i];

      if (seen.has(arr[i])){
        result = [deff, arr[i]];
      }

    seen.add(deff);
  }

  return result;
}
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]


//5
/*Write the function detectNetwork. It should accept a string or a number for its cardNumber argument and, based on the provided cardData, return the appropriate network string (or undefined if there's no match).*/


var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];

function detectNetwork(cardNumber, cardData) {
  var result = "";

var strNum = String(cardNumber);

var firstdigit = strNum.slice(0,1);

var secondDigit = strNum.slice(0,2);

for (var i=0; i<cardData.length; i++){ 
  if (cardData[i].prefixes.includes(firstdigit) || cardData[i].prefixes.includes(secondDigit) && cardData[i].lengths.includes(strNum.length)){ 
    result += cardData[i]['issuer/network'];

     
  } 
}
 return result;
return undefined;   
}




// example
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'


//6
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);


//7
// Submit de-obfuscated code
function  bigFlipper(input,n){
  //Create a result string
  var flipped = '';
  //split input string into an array
  var character = input.split("");
  //iterate over the array of characters by n
  for(var i =0;i<character.length;i+=n){
      //slice the array from current position to current position plus n
    var currentSlice = character.slice(i,i+n);
    var reversedSlice = currentSlice.reverse();  //reverse the array
    var joinedSlice = reversedSlice.join("");//join the reverse array
    flipped += joinedSlice;//add resulting string to result
  } 
  //return result
  return flipped;   
}
//Test function
function assertEqual(actual,expected,testName){
  if (actual === expected){
    console.log('passed');
  }
  else{
    console.log('failed'+testName);
  }
}
var input1 = 'a short example';
var actual_1 = bigFlipper(input1,5);
var expected = "ohs axe trelpma";
assertEqual(actual_1,expected,'should flip pairs');


