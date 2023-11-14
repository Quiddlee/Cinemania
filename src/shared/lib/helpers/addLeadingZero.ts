/**
 * Pads a number with a leading zero if it's a single digit number.
 *
 * @param {number} num - The number to pad with zero.
 * @return {string} - The padded number as a string.
 */
function addLeadingZero(num: number) {
  return String(num).padStart(2, '0');
}

export default addLeadingZero;
