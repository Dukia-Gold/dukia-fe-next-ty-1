function formatNairaAmount(amount: string): string {
    // Check if the amount string contains a minus sign
    if (amount.includes('-')) {
        // Remove the minus sign
        let positiveAmount = amount.replace('-', '');
        // Add the minus sign before the Naira sign
        return `-₦${positiveAmount.slice(1)}`;
    }
    return amount;
}

export default formatNairaAmount