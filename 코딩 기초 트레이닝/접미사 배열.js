function solution(my_string) {
    var answer = [];
    var brk_str = my_string.split('');
    for(i=0; i < my_string.length; i++) {
        answer.push(brk_str.join(''));
        brk_str.shift();
    }
    answer.sort();
    return answer;
}


// split은 문자열을 배열로 넣어주는 역할을 합니다.
// split(separate, limit);
// separte는 구분자, limit는 계산을 실행할 횟수입니다.
// 배열에서 shift()는 맨 앞의 요소를 빼버립니다.