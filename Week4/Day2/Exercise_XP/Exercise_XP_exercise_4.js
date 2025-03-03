const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

var prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


var shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let article = "banana";

    if (article in stock){
        
        console.log(`The price of ${article} is ${prices[article]}`)
        prices = prices[article] - 1;
    }

    console.log(prices);
}

myBill();