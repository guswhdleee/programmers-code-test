function solution(arr) {
  var answer = [];
  var contain = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 2) contain.push(i); // arr을 순회해서 값이 2인 index만 contain에 저장
  }
  if (contain.length == 0) {
    // 2가 하나도 없을때를 분별
    answer.push(-1);
    return answer;
  } else if (contain.length == 1) {
    // 2가 한 개만 있을 때를 분별
    answer.push(2);
    return answer;
  } else if (contain.length == 2) {
    answer = arr.slice(contain[0], contain[1] + 1);
    return answer;
  }
  var end = contain.length - 1;
  answer = arr.slice(contain[0], contain[end] + 1);
  return answer;
}
