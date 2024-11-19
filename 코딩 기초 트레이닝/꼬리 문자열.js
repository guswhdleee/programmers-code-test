function solution(str_list, ex) {
  var answer = "";
  var ans = str_list.map((value) => {
    if (value.includes(ex) == true) return "";
    else return value;
  });

  return ans.filter((value) => value).join("");
}
