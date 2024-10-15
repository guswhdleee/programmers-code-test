function solution(arr1, arr2) {
  if (arr1.length < arr2.length) return -1;
  else if (arr1.length > arr2.length) return 1;
  else if (arr1.length == arr2.length) {
    var sum1 = arr1.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
    var sum2 = arr2.reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
    if (sum1 == sum2) return 0;
    return sum1 > sum2 ? 1 : -1;
  }
}
