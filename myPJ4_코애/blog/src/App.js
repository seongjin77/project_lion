import './App.css';
import {useState} from 'react';
function App() {

  let post ='옷 블로그';
  let [a,b] = useState(['봄','여름','가을','겨울'])
  let [좋아요수, 변경] = useState(0);

  function add (){
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
          <li>{a[0]} <span onClick={add}>좋아요</span>{좋아요수}</li>
          <li>{a[1]} <span>좋아요</span>{좋아요수}</li>
          <li>{a[2]} <span>좋아요</span>{좋아요수}</li>
          <li>{a[3]} <span>좋아요</span>{좋아요수}</li>
        </ul>
    </div>
  );
}

export default App;
