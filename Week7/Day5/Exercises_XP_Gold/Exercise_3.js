function cleanArray(arr) {
    return arr.filter(item =>
      item !== null &&
      item !== 0 &&
      item !== "" &&
      item !== false &&
      item !== undefined &&
      !Number.isNaN(item)
    );
  }

console.log(cleanArray([NaN, 0, 15, false, -22, '',undefined, 47, null]))