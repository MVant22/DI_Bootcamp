// Exercise 1 
// var num = 8;
// var num = 10;
// console.log(num);

// Exercise 2 
// function numbers() {
//     for (var i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//     console.log(i);
// }
// numbers();

// Exercise 3 
// 1.Create a global variable that save the amount of money you have in your account
var account = 4000;
const vat = 0.15;


const transactions = [
    {type: "expense", amount: 200},
    {type: "expense", amount: 1000},
    {type: "income", amount: 200},
    {type: "income", amount: 500},

];

function calculateVat(expenses){
    return expenses * vat;
}

function updateBalance(transactions){
    let totalExpense = 0;
    let totalIncome = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'expense'){
            totalExpense += transaction.amount;
        }
        else if (transaction.type === 'income'){
            totalIncome += transaction.amount;
        }
    });

    let vatAmount = calculateVat(totalExpense);
    let totalExpenseWithVat = totalExpense + vatAmount;

    account = account + totalIncome - totalExpense;

    console.log(`Account Balance: ${account}`)
}

updateBalance(transactions);
