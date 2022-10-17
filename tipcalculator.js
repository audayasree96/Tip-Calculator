
function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    
    var x=document.getElementById("serviceQual");
	  var i=x.selectedIndex;
	  var serviceQual=x.options[i].value
    
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    
  
  var totaltip=(billAmt * serviceQual)
    var total = (billAmt * serviceQual) / numOfPeople;
   
    total = Math.round(total * 100) / 100;
    
    total = total.toFixed(2);
    
    document.getElementById("tip").innerHTML = total;
    document.getElementById("tiptotal").value = totaltip;
  
  }
  
  
  
  