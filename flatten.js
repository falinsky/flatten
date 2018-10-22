/**
 * Flatten provided data (including nested arrays) into a flat array.
 *
 * @param data
 * @returns []
 */
function flatten(data) {
  if (typeof data === 'undefined') {
    return [];
  }

  if (!Array.isArray(data)) {
    return [data];
  }

  return data.reduce(function (accumulator, item) {
    return accumulator.concat(flatten(item));
  }, []);
}

module.exports = flatten;
