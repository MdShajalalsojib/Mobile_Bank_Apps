document.getElementById("cashout").style.display="none";
document.getElementById("addMoney").style.display = "none";
document.getElementById("transection-history").style.display = "none";
document.getElementById("Trandfer").style.display = "none";
document.getElementById("Get-Bonus").style.display = "none";
document.getElementById("Pay-Bill").style.display = "none";

document.getElementById("add-money-box").addEventListener("click",function(){
    handleToggle("addMoney","block")
    handleToggle("cashout","none")
    handleToggle("transection-history","none")
    handleToggle("Get-Bonus","none")
    handleToggle("Pay-Bill","none")
    handleToggle("Trandfer","none")

})

 document.getElementById("cas-hout-box").addEventListener("click",function(){
      handleToggle("addMoney","none")
      handleToggle("cashout","block")
      handleToggle("transection-history","none")
      handleToggle("Get-Bonus","none")
      handleToggle("Pay-Bill","none")
      handleToggle("Trandfer","none")
 })