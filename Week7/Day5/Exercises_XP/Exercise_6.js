var bankAmount = 20000;
const VAT = 0.17;

const details = ["+200", "-100", "+146", "+167", "-2900"];

const updateDetails = details.map(item => {
    let amount = parseFloat(item);
    let taxAmount = amount + (amount * VAT);
    return taxAmount;
});

updateDetails.forEach(value => {
    bankAmount += value;
});

console.log("Final bank amount:", bankAmount.toFixed(2));