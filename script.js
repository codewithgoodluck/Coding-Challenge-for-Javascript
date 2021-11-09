// Reverse a string challenge

// Reverse the string hello

// // Fisrt Method
// function string(str){
//     var resuilt = str.split("").reverse("").join("")
//     console.log(resuilt)

    
// }
// string("hello")


// // Second Method

// var resuilt = ""

// function string(str){

//     for(var i=str.length-1; i>=0; i--){
//         console.log(str[i])
//     }
    
    
// }
// string("hello")


// Second Challenge

// Find the factorial of a number 10

// function number(num){
//     var resuilt = 1;
//     for(var i=0; i <= num; i++){
//         resuilt += resuilt * i
//     }
    
//     console.log(resuilt)
    
// }
// number(4)

// Task 3

// Check if a String is a Palindrome 

// function Palindrome(str){
//     // remove space, percent sign, underscore, pipe, colon, semicolon, etc are non-alphanumeric characters using reagex and replace methode
//     // var reg=/[\w_]/g;
//     // var smallStr= str.toLowerCase().replace(reg,"");

//     // reverse the string

//     // var string = '123abcABC-_*(!@#$%^&*()_-={}[]:\"<>,.?/~`';
//     var stripped = str.replace(/[^A-Za-z0-9]/g, '');
//     var revereString= stripped .split("").reverse("").join("");


//     if(str =! revereString){
//         console.log("Not Palindrom")
//     } else{
//         console.log("Palindrom")
//     }
     
// }

// Palindrome("eye$ 5")



// function palindrome(str){
//     isPalindrome = true;
//     for(let i =0; i< str.length; i++){
//         console.log(str[i])
//       if(str[i]== str[(str.length - i)-1]){
//         isPalindrome = true;
//       }
//       else{
//         isPalindrome = false;
//       }
//     }
//     return isPalindrome;
//   }
//   console.log(palindrome("madam")); //true
//   console.log(palindrome("foster")); // false


// Find the Longest Word in a sentence 

// function findLongestWord(str){
//   var longestWord=""
//   var newLongestworkd=str.split(" ")
//   for(var word of newLongestworkd ){
//     if(word.length > longestWord.length) longestWord = word
//   }
//   return word.length
// }

// console.log(findLongestWord("This is Goodluck"))

// Capitalize the first word in a word


// function CapitalizWord(word){
//   // var capital= word.toLowerCase().split(" ")
//   // for(var i=0; i< capital.length; i++){
//   //   capital[i] = capital[i][0].toUpperCase() + capital[i].slice(1)
//   // }

//   // return capital.join(" ")

//   var capital = word.toLowerCase().split(" ")
//   for(var i =0; i<capital.length; i++){
//     capital[i]=capital[i][0].toUpperCase() + capital[i].slice(1) 
//   }

//   return capital.join(" ")


// }

// console.log(CapitalizWord("She leaves in me"))







// Check the largest number in an Array 

// function checkLargestNum(num){
// var CheckmaxNum=[]

// for(var i=0; i<num.length; i++){
//   var maxNum=num[i][0]
//   for(var j=0; j< num[i].length; j++){
//     if(maxNum > num[i][j]){
//       maxNum=maxNum
//     }
//   }
//   CheckmaxNum.push(maxNum)
//   }
//   return CheckmaxNum;
// }

console.log(checkLargestNum([[4,5,8,9], [10,5,11,43,56], [34,89,46,78,19],[7,89,23,46,78]]))







