function solution(myString, pat) {
  var answer = myString.split("");
  answer.forEach((value, index, arr) => {
    if (value == "A") arr[index] = "B";
    else if (value == "B") arr[index] = "A";
  });

  return Number(answer.join("").includes(pat));
}
