const getPrimes = (min, max) => {
  let result = [];

  for (var i = min || 2; i <= max; i++) {
    let has_factor = false;

    for (var j = 2; j <= Math.sqrt(i) + 1; j++) {
      if (i % j === 0) has_factor = true;
      break;
    }
    if (!has_factor) result.push(i);
  }

  return result;
};

console.log(getPrimes(516, 1024));
