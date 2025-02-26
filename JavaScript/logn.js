// alert()
document.getElementById("btn-login").addEventListener("click",function(event){
    event.preventDefault();
    //  console.log("hello")
    const MobileNumber = document.getElementById("mobile-number").value;
      const Pin = document.getElementById("Enter-pin").value;
      const convertedPin = parseInt(Pin)

       if(MobileNumber.length===11) {
          if ( convertedPin===1234){
             window.location.href = "./main.html"
          }
          else{
             alert("Please check your pin")
          }
       }
       else{
        alert("Please check your mobile number")
       }
})