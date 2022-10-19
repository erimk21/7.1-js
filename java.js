function myFunction() {
  
  var budget= 100;
  var product= 60;




  if(budget>product) {
    console.log("u heeft genoeng");
    document.getElementById("text1").innerHTML = "genoeg";
    
    document.getElementById("text1").style.color= "green";
  
}else{
    console.log("helaas,je hebt te weinig geld");

    document.getElementById("text1").innerHTML = " niet genoeg";

    document.getElementById("text1").style.color= "red";
  }
}
