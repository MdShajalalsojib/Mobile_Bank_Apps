document.getElementById('Add_money').addEventListener('click',function(event){
    event.preventDefault();
    const Amount = document.getElementById("Amount").value;
     const convertedAmount = parseFloat(Amount);
     const pin = document.getElementById("Enter-pin").value;
     const convertedPin = parseInt(pin);

     const mainBalance= document.getElementById("main-balance").innerText;
     const convert = parseFloat(mainBalance);

     if(convertedPin===1234){
        // console.log("This pin is ok")
        const sum = convert + convertedAmount;
        document.getElementById("main-balance").innerText = sum;

     }
     else{
        alert("Please check your PIN number");
     }
})