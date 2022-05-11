
function bar() {//yaha pe nav baar function defin kiya jo onclick pe lgya tha//
    var x = document.querySelector(".list");//yaha query selector ki help se list class ko call kiya ///
     var y=document.querySelector(".homepagetxt")//fir yaha pe parada class ko call kiya jo hmare web page ka 1st element h
                                                                            //or isi class m js ki help se style lgai or visibility ka use kiya jise nav bar hide ya open hota h//
  
  
    if (x.style.display == "block") {
      x.style.display = "none";
      y.style.visibility="visible"
    }
    else {
      x.style.display = "block"; 
       y.style.visibility="visible"//yaha div ka element hide ho gya nav open krne m//
  
  
  
    }
  }
  function order() {
alert("thanku for ordering food")
  }





