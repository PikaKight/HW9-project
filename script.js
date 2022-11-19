//result function
function myResults (){
    return ("test");
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