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

  const result = [];

  data.forEach(function (dataItem) {
    flatten(dataItem).forEach(function (flatItem) {
      result.push(flatItem);
    });
  });

  return result;
}

module.exports = flatten;
