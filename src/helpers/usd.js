export const FormatCurrency = amount => { //This way we can create helpers
    amount = amount / 849;
    return Number(amount).toLocaleString('en-US', { //we can export this function and use it anywhere
        style: 'currency',
        currency: 'USD'
    })
}