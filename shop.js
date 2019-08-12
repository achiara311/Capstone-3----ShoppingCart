function shopList(){
let item = document.getElementById("todoForShopping").value
let text = document.createTextNode(item);
let newItem = document.createElement("li")
newItem.appendChild(text)
document.getElementById("theShopList").appendChild(newItem)
}









