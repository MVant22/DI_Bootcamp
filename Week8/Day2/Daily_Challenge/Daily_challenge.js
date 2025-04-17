let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

groceries.fruits.forEach(fruit => console.log(fruit))

let cloneGroceries = () => {
    let user = client;
    client = "Betty";

    let shopping = groceries;
    groceries.totalPrice = "35$"

    groceries.other.paid = "false";

    return (user , shopping)
};

const result = cloneGroceries();

console.log(result);
