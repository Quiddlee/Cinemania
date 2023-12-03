export const atLeastOneDigit = /[0-9]/;
export const atLeastOneLowerCase = /[a-z]/;
export const atLeastOneUpperCase = /[A-Z]/;
export const atLeastOneSpecialCharacter = /[^\w\s]/g;
export const passwordStrengthArr = [
  atLeastOneDigit,
  atLeastOneLowerCase,
  atLeastOneUpperCase,
  atLeastOneSpecialCharacter,
];
export const passwordStrengthLevels = [
  'poor 💩',
  'fair 🤔',
  'good 😃',
  'excellent 🚀',
] as const;
