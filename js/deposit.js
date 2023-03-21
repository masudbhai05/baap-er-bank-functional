document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDipositAmount = getInputFieldValueById('deposit-field');
    const previousTotalAmount = getElementValueById('deposit-total');
    const newDipositTotal = newDipositAmount + previousTotalAmount;
    setElementValueById('deposit-total', newDipositTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDipositAmount;
    setElementValueById('balance-total', newBalanceTotal);
})