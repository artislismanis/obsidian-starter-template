/**
 * Capitalise each word in the input string
 * @param  {string} Input string
 * @return {string} Output string with each word capitalised
 */
function capitalise(str) {
  return str
    .split(/\s+/) // split on any whitespace
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = capitalise;
