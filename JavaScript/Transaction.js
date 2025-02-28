document.getElementById("Transaction-box").addEventListener("click", function(){
    handleToggle("addMoney","none")
    handleToggle("cashout","none")
    handleToggle("Trandfer","none")
    handleToggle("Get-Bonus","none")
    handleToggle("Pay-Bill","none")
    handleToggle("transection-history","block")
})

document.getElementById("Trandfer-box").addEventListener("click", function(){
    handleToggle("addMoney","none")
    handleToggle("cashout","none")
    handleToggle("transection-history","none")
    handleToggle("Get-Bonus","none")
    handleToggle("Pay-Bill","none")
    handleToggle("Trandfer","block")

}) 

document.getElementById("get-bouns-box").addEventListener("click", function(){
    handleToggle("addMoney","none")
    handleToggle("cashout","none")
    handleToggle("transection-history","none")
    handleToggle("Trandfer","none")
    handleToggle("Pay-Bill","none")
    handleToggle("Get-Bonus","block")

}) 

document.getElementById("pay-bill-box").addEventListener("click", function(){
    handleToggle("addMoney","none")
    handleToggle("cashout","none")
    handleToggle("transection-history","none")
    handleToggle("Trandfer","none")
    handleToggle("Get-Bonus","none")
    handleToggle("Pay-Bill","block")

}) 