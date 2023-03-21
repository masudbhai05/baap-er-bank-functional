document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousTotalAmount = getElementValueById('withdraw-total');
    const previousBalanceTotal = getElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Tor Baap er Bank a ato taka nai.');
        return;
    }
    const newWithdrawTotal = newWithdrawAmount + previousTotalAmount;
    setElementValueById('withdraw-total', newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValueById('balance-total', newBalanceTotal);
})