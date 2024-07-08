// utils/decimalFormatter.ts

export const formatDecimal = (number: number, decimalPlaces: number = 2): string => {
  const factor = Math.pow(10, decimalPlaces);
  const formattedNumber = Math.floor(number * factor) / factor;
  return formattedNumber.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
};
