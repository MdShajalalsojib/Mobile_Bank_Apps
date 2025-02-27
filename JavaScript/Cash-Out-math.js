document.getElementById("cashOut").addEventListener("click",function(event){
    event.preventDefault();
    const pin = document.getElementById("Cashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("Cashout_Amount").value;

    convertedAmout = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin===1234) {
        const Subtraction = convertedMainBalance - convertedAmout;
        document.getElementById("main-balance").innerText = Subtraction;
    }
    else{
        alert("Please check your PIN number");
    }
})