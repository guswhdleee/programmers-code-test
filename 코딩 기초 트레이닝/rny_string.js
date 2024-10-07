function solution(rny_string) {
  if (rny_string.indexOf("m") >= 0) {
    var result = rny_string.split("");
    result.forEach((value, index, arr) => {
      if (value == "m") arr[index] = "rn";
    });
    return result.join("");
  } else return rny_string;
  return rny_string;
}
