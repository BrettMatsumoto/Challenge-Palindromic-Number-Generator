function palindromicNumberGenerator(num) {
  let reversed = Number(
    num
      .toString()
      .split('')
      .reverse()
      .join(''),
  );
  let count = 0;

  while (num !== reversed) {
    num += reversed;
    reversed = Number(
      num
        .toString()
        .split('')
        .reverse()
        .join(''),
    );
    count++;
  }
  return {
    value: num,
    steps: count,
  };
}
module.exports = palindromicNumberGenerator;
