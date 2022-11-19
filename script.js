//test array database for food items - ignore test values, can replace with other thing or average numeric values, or if we want to use a database instead of kaggle or smth
var foodInfo = ["#1, chicken, type: breast, protein: 20g, fat: 9g",
                         "#2, beef, type: n/a, protein: 23, fat: 3g"] ;

//result function
function myResults (){
    return ("");
}

//enter via string
function searchStringFunction() {
    //validates search input to only valid characters (strings)
    var regex = /[0-9]/g;
    var input = document.getElementById("myInputString");
    //removes numbers from search terms
    input.value = input.value.replace(regex,"");
  
    // filtering for search results
    var filter = input.value.toLowerCase();
    
    
}//end of function