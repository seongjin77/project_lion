function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    
     let maxNum = function(num1,num2){
        if(num1%num2 === 0){
            return num2
        }
        else {
           return maxNum(num2, num1%num2)
        }
    }
    
   
    let minNum = num1 * num2 / maxNum(num1,num2)
    
    answer[0] = denum1 * (minNum/num1) + denum2 * (minNum/num2)
    answer[1] = minNum 
    
    return answer;
}