// Reverse a string challenge

// Reverse the string hello

// Fisrt Method
function string(str){
    var resuilt = str.split("").reverse("").join("")
    console.log(resuilt)

    
}
string("hello")


// Second Method

var resuilt = ""

function string(str){

    for(var i=str.length-1; i>=0; i--){
        console.log(str[i])
    }
    
    
}
string("hello")
