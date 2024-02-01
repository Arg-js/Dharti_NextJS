function createSubArrays<T>(originalArray: T[], chunkSize: number) {
  var resultArray = [];

  for (var i = 0; i < originalArray.length; i += chunkSize) {
    var subarray = originalArray.slice(i, i + chunkSize);
    resultArray.push(subarray);
  }

  return resultArray;
}

export { createSubArrays };
