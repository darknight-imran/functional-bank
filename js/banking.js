document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // deposit Total 
    const depositTotal = document.getElementById('deposite-total');
    const depositTotalText = depositTotal.innerText;
    const depositeTotalAmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositeTotalAmount + depositeAmount;

    // balance added 
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previusBalanceTotal + depositeAmount;

    // clear input filed 
    depositeInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // withdraw Amount added 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

    // balance Total mainus 
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previusBalanceTotal - withdrawAmount;

    // clear withdraw input filed 
    withdrawInput.value = '';
})