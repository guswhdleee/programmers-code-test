function solution(arr, intervals) {
  var answer = [];
  var intArr1 = intervals[0];
  var intArr2 = intervals[1];
  var result1 = arr.slice(intArr1[0], intArr1[1] + 1);
  var result2 = arr.slice(intArr2[0], intArr2[1] + 1);
  answer = [...result1, ...result2];
  return answer;
}
