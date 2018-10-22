const flatten = require('./flatten');

describe('flatten', () => {
  test('should return an empty array if nothing is passed', () => {
    expect(flatten()).toEqual([]);
  });

  test('should return an array if anything other than array is passed', () => {
    expect(flatten(1)).toEqual([1]);
    expect(flatten('some string')).toEqual(['some string']);
    expect(flatten({})).toEqual([{}]);
  });

  test('should return an empty array if an empty array is passed', () => {
    expect(flatten([])).toEqual([]);
  });

  test('should flatten an array to a flat array', () => {
    expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3]);
    expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    expect(flatten([1, [2, 3], [4, [5]]])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([1, []])).toEqual([1]);
  });

  test('should flatten an array with huge amount of elements', () => {
    const bigArray = [];
    for (let i = 0; i < 100000; i++) {
      bigArray.push(i);
    }

    expect(flatten(bigArray)).toEqual(bigArray);
    expect(flatten([[[[[[[[[[[[[[bigArray]].concat(bigArray)]]]]]]].concat(bigArray)]]]]])).toEqual(bigArray.concat(bigArray).concat(bigArray));
  });

});
