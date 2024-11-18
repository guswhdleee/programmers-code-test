function solution(arr, delete_list) {
  let match = false;
  let answer = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < delete_list.length; j++) {
      if (arr[i] == delete_list[j]) {
        match = true;
      }
    }
    if (match == false) {
      answer.push(arr[i]);
    } else if (match == true) match = false;
  }
  return answer;
}
