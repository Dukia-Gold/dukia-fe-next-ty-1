// utils/currencyFormatter.ts

export const formatCurrency = (amount: number, locale: string = 'en-NG', currency: string = 'NGN'): string => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };
  