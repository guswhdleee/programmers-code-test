function solution(num_list) {
  var answer = 0;
  var doFun = 0;
  for (i = 0; i <= num_list.length; i++) {
    if (num_list[i] < 0) {
      answer = i;
      doFun++;
      break;
    }
  }
  if (doFun == 0) answer = -1;
  return answer;
}
