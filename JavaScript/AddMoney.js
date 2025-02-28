document.getElementById('Add_money').addEventListener('click',function(event){
    event.preventDefault();
    const Amount = document.getElementById("Amount").value;
     const convertedAmount = parseFloat(Amount);
     const pin = document.getElementById("Enter-pin").value;
     const convertedPin = parseInt(pin);

     const acount = document.getElementById("mobile-number").value;
     const convertedAcount = parseFloat(acount);

     const mainBalance= document.getElementById("main-balance").innerText;
     const convert = parseFloat(mainBalance);

      


      if(acount.length != 11){
         window.alert("Mobile number should be 11 length!")
         
      }

      if(convertedPin===1234){
         // console.log("This pin is ok")
         const sum = convert + convertedAmount;
         document.getElementById("main-balance").innerText = sum;

          const container = document.getElementById("transection-container")
         const p = document.createElement("p");
         const currentDate = new Date().toLocaleString();
         
         p.innerText = `
           add ${Amount} from ${acount} mobile-number on ${currentDate}
         `
          
         container.appendChild(p)
         
         
      }
      else{
         alert("Please check your PIN number");
      }

     
     
      
})