document.getElementById("cashOut").addEventListener("click",function(event){
    event.preventDefault();
    const pin = document.getElementById("Cashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("Cashout_Amount").value;
      const convertedAmout = parseFloat(amount);

    const acount = document.getElementById("mobile-number").value;
    const convertedAcount = parseFloat(acount);

    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    

        if(acount.length != 11){
                window.alert("Mobile number should be 11 length!")
                return;
          }

        if (convertedPin===1234) {
            const Subtraction = convertedMainBalance - convertedAmout;
            document.getElementById("main-balance").innerText = Subtraction;


            const container = document.getElementById("transection-container")

            const p = document.createElement("p");
            p.innerText=`
              cashout ${amount} from this ${acount} mobile-number
            `
            container.appendChild(p)
        }
        else{
            alert("Please check your PIN number");
        }    

    
     
})