// Reverse a string challenge

// Reverse the string hello

// fisrt method

// function reverse(rev){

// var final=rev.split("").reverse("").join("")

// console.log(final)


// }

// reverse("Goodluck")

// Second Method

// function reverse(rev){

//     var finalResuilt=""

//     for(var i = rev.length-1; i>=0 ; i-- ){
        
//         finalResuilt+=rev[i]
//     }

//     console.log(finalResuilt)

// }

// reverse("Goodluck")


// Second Challenge

// Find the factorial of a number 10

// function factoria(fac){

//     var sum= 1;

//     for(var i=0; i<=fac; i++ ){
//          sum  +=sum * i
//     }
// console.log(sum)
// }

// factoria(4)

// Check if a letter is Palindr

function Check(str){
     pallandrum = true;

    for(var i=0; i < str.length; i++){

        if(str[i] == str[(str.length-i)-1]){
            pallandrum = true;
        }
        else{
            pallandrum = false; 
        }
    }
    return pallandrum;

}

console.log(Check("madam")); //true



