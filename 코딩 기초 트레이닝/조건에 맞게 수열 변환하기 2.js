function solution(arr) {
  var count = 0;
  var compare = true;
  while (compare) {
    var compareArr = [...arr];
    for (i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 == 0) arr[i] = arr[i] / 2;
      else if (arr[i] < 50 && arr[i] % 2 == 1) arr[i] = arr[i] * 2 + 1;
    }
    if (compareArr.join("") == arr.join("")) compare = false;
    else count++;
  }
  return count;
}
