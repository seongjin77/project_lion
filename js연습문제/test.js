// let data = [3,4,5,6,7];

// let result = data.reduce((a,b)=>{
    //     console.log('이것은 a '+a);
    //     console.log('이것은 b '+b);
    //     return a+b;
    // });
    
    // 초깃값이 없다면 초기 누산값에 배열 인덱스[0] 값을 넣고 요소순회는 인덱스1부터 시작한다.
    
    let data = [10, 20, 30, 10, 20, 30, 40, 10];
    //1.
    let result = data.reduce((a,b)=> a+b,0)/data.length;
    console.log(result);
    //2.
    let result2 = data.map((x)=>(x-result)**2)
    console.log(result2);
    //3.
    let str ='5, 4, 10, 2, 5';
    let change = str.split(', ').map(x => parseInt(x)).reduce((a,b)=> a+b,0)/5
    console.log(change);
    //4. 각 자리의 합을 구하라
    let data2 = [11, 22, 33, 111, 2];
    let change2 = data2.map(x=> x.toString().split(''));
    let result3 = change2.map(y => {
       return y.reduce((a,b)=>  a + parseInt(b),0)
    })
    // console.log(result3); // 각 자리수의합
    //5.총합
    let result4 = result3.reduce((a,b)=>a+b);
    console.log(result4); // 초기값 설정 안해줘도 됨. 초기값 설정 안해주면 a에 인덱스[0]의 값이 들어가고 b는 인덱스[1]부터 들어감
    //6. 반복문만 사용하여 숫자단위 콤마 찍기
    let money = 10000;
    let changeMoney = money.toString();
    // console.log(typeof changeMoney);
    for(let i= changeMoney.length-3; i>0; i -= 3){
        changeMoney = changeMoney.slice(0,i)+','+changeMoney.slice(i);
    }

    console.log(changeMoney)

    //7. ,지우기
    // let money2 = '10,000';
    // let arr = money2.split('');

    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]===','){
    //         arr.splice(i,1);
    //         i--;
    //     }
    // }
    // let changeMoney2 = arr.join('');
    // console.log(changeMoney2);

    let money2 = '10,000,000,000';
    for(let i=money2.length-4; i>0; i-=4){
        money2 = money2.slice(0,i)+money2.slice(i+1);
    }
    
    console.log(money2);


    //8. 로또 만들기
    let 로또번호 = [];
    for(let i=0; i<6; i++){
        let randomNum = Math.floor((Math.random()*45)+1);
    
        로또번호.push(randomNum);
    }
    console.log(로또번호);




// let arr = [10,20,30,40,50];
// arr.forEach((x,i)=> arr[i]=arr[i]**2);

// console.log(arr);


// 문제
// let 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

// // 문제 1 : 몇 명이 게시판에 게시물을 썼나요?
// let 결과 = new Set(회사게시판);
// console.log(결과.size);
// // 문제 2 : 각각 몇 개의 게시물을 작성하였나요?

// let 결과2 = 회사게시판.reduce((a,b)=>{
//    a[b] = ((a[b])||0) + 1;
//    return a 
// },{});

// console.log(결과2);


