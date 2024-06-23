function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputAmountText = inputFiled.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear input filed 
    inputFiled.value = '';
    return inputAmount;
};

function updateTotalFiled(totalFiledId, amount) {
    const depositTotal = document.getElementById(totalFiledId);
    const depositTotalText = depositTotal.innerText;
    const depositeTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositeTotalAmount + amount;
};

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previusBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previusBalanceTotal - amount;
    }

}

document.getElementById('deposite-button').addEventListener('click', function () {

    const depositeAmount = getInputValue('deposite-input');

    updateTotalFiled('deposite-total', depositeAmount);


    updateBalance(depositeAmount, true);

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');

    updateTotalFiled('withdraw-total', withdrawAmount);

    updateBalance(withdrawAmount, false);


})