const main = document.querySelector(".artcl_main");
const 입력창 = main.querySelector("input");
const 입력버튼 = main.querySelector("header button");
const 목록 = main.querySelector(".list_todo");

// 1. 입력 기능
const 투두리스트 =  JSON.parse(localStorage.getItem('Todo')) || [];
입력버튼.addEventListener("click", () => {
    글추가();
    출력()
});
// 2. 글 추가 : 여기선 투두리스트에 추가만 해준다.
function 글추가() {

    const 할일 = {
        내용: 입력창.value,
        체크: false
    }

    투두리스트.push(할일);
    localStorage.setItem('Todo',JSON.stringify(투두리스트))
 //   console.log(투두리스트);
    
}

// 2-1 삭제 버튼
function 삭제버튼(li){
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    btn.addEventListener('click', ()=>{
        li.remove();
        투두리스트.length= 0
        localStorage.removeItem('Todo');
        let list = 목록.querySelectorAll('li');

        list.forEach(v => {
            목록.appendChild(v)
            투두리스트.push(v)
            localStorage.setItem('Todo',JSON.stringify(투두리스트))
        })


    })

    li.appendChild(btn)

}

// 3. 할일 체크 함수
function 체크(li){
    li.addEventListener('click',() => {
        console.log('11확인');
        li.classList.toggle('done')
    })
}

// 4. 랜더링 함수
function 출력(){
    
    목록.innerHTML = ''
    const frag = document.createDocumentFragment();

    투두리스트.forEach(리스트 => {
        const li = document.createElement('li');
        li.textContent = 리스트.내용

        삭제버튼(li)
        체크(li)
        frag.appendChild(li)
    })

    목록.appendChild(frag)
   
}


