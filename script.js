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



function palindrome(str){
    isPalindrome = true;
    for(let i =0; i< str.length; i++){
        console.log(str[i])
      if(str[i]== str[(str.length - i)-1]){
        isPalindrome = true;
      }
      else{
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }
  console.log(palindrome("madam")); //true
//   console.log(palindrome("foster")); // false




