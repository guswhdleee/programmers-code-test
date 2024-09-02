function solution(my_string, index_list) {
    var answer = [];
    for(i=0; i < index_list.length; i++) {
        answer.push(my_string[index_list[i]]);
    }
    var answer2 = answer.join('');
    
    return answer2;
}

// javascript에서 join('') 옵션을 넣으면 배열에 들어간 모든 아이템들을 붙일 수 있습니다.