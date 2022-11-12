/* eslint-disable */
import './App.css';
import {useState} from 'react';
function App() {

  let post ='옷 블로그';
  let [a,b] = useState(['봄','여름','가을','겨울'])
  

  function add (a){
    console.log(a);
     return 변경(좋아요수+1)
  }

  function titleSort(){
    let copy = [...a]
    copy.sort();
      b(copy)
  }

  return (
    <div className ='nav'>
        <h2 className='title'>{post}</h2>
        <button onClick={titleSort}>가나다순 제목 정렬</button>
        <ul>
          {
            a.map((v,i) => {
              let [좋아요수, 변경] = useState(0);
           return <li key={i}>{v}<span onClick={() => {변경(좋아요수+1)} }>👍</span>{좋아요수}</li>
            })
          }
          
          
          
        </ul>
    </div>
  );
}

export default App;
