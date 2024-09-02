function solution(my_string, queries) {
    var answer = '';
    var del_col = [];
    var del_str = '';
    for(i=0; i < queries.length; i++) {
        del_col = queries[i];
        del_str = my_string.slice(del_col[0], del_col[1]+1);     // 바꾸고 싶은 문자열 자르기
        del_str = del_str.split('').reverse().join('');          // 문자열 뒤집기
        my_string = my_string.slice(0, del_col[0]) + del_str + my_string.slice(del_col[1]+1);
    }
    answer = my_string;

    return answer;
}

// 배열 : slice(삭제 시작 위치, 삭제할 개수, 추가할 값) => 삭제한 요소를 배열로 반환
// 문자열 : splice(삭제 시작 위치, 끝 위치 - 1). 이때 원본은 손상 안됨 개꿀 => 삭제한 요소를 문자열로 반환
// 문자열을 바로 뒤집을 수는 없음..문자열 => 배열전환 => 뒤집기 => 다시 문자열 순

