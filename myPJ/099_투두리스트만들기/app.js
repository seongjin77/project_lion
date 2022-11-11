const main = document.querySelector('.artcl_main');

const 입력 = main.querySelector('#inp_todo');
const 등록버튼 = main.querySelector('header > button');
const 목록 = main.querySelector('.list_todo');

const 로컬저장소 = JSON.parse(localStorage.getItem('ToDo')) || [];


출력()

// ToDo 등록
등록버튼.addEventListener('click', (event) => {
    if (입력.value) {
    const 리스트 = {
        내용: 입력.value,
        완료: false,
    }
    로컬저장소.push(리스트);

    출력();
    업데이트();
} else {
    alert('뭐라도 좀 입력을 헤라')
}})

function 업데이트() {
    로컬저장소.length = 0;

    const 현재 = 목록.querySelectorAll('li');

    현재.forEach(li => {
        const 할일 = {
            내용: li.textContent,
            완료: li.classList.contains('done'),
        }
        로컬저장소.push(할일);
    })
    localStorage.setItem('ToDo', JSON.stringify(로컬저장소));
}
// Rendering
function 출력() {
    목록.innerHTML = '';
    로컬저장소.forEach((대상) => {
        const li = document.createElement('li');
        li.textContent = 대상.내용;
        if (대상.완료) li.classList.add('done');

        const deleter = document.createElement('button')
        deleter.innerHTML = `<i class="fa-solid fa-trash"></i>`
        li.appendChild(deleter);
        
        deleter.addEventListener('click', (event) => {
            li.remove()
            업데이트()
        })
        완료(li)
        목록.appendChild(li)
    });
}


function 완료(대상) {
    대상.addEventListener('click', (event) => {
        대상[완료] = !대상[완료];
        대상.classList.toggle('done');
        업데이트()
    })
}

function 다운로드() {
    
}