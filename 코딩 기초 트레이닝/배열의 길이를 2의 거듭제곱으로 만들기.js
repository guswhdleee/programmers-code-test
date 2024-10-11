function solution(arr) {
  var i = 2;
  var j = 0;
  while (1) {
    if (arr.length <= i ** j) {
      j = i ** j;
      break;
    }
    j++;
  }
  j = j - arr.length;
  while (j > 0) {
    arr.push(0);
    j--;
  }
  return arr;
}
