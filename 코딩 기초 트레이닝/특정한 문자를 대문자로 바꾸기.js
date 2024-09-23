function solution(my_string, alp) {
  var compare = my_string.split("");
  compare = compare.map((value) => {
    if (value == alp) {
      return value.toUpperCase();
    } else return value;
  });
  return compare.join("");
}
