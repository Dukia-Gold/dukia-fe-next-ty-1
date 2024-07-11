// utils/decimalFormatter.ts

export const formatDecimal = (
  number: number,
  decimalPlaces: number = 2,
  roundUp: boolean = false
): string => {
  const factor = Math.pow(10, decimalPlaces);
  const roundedNumber = roundUp
    ? Math.ceil(number * factor) / factor
    : Math.floor(number * factor) / factor;

  return roundedNumber.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
};
