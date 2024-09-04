function solution(my_string, s, e) {
  var answer = "";
  var reverseStr = my_string.slice(s, e + 1);
  var result = Array.from(reverseStr).reverse().join("");
  answer = my_string.slice(0, s) + result + my_string.slice(e + 1);
  return answer;
}
