import {DiaryEditor} from './DiaryEditor/DiaryEditor';
import DiaryList from './List/DiaryList';

const dummyList = [
  {
    id:1,
    author:'김성진',
    content:'오늘공부',
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author:'정순재',
    content:'오늘공부',
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author:'차세현',
    content:'오늘공부',
    emotion: 4,
    created_date: new Date().getTime()
  },
]

function App() {
  return (
    <div className="App">
        <DiaryEditor/>
        <DiaryList dummyList={dummyList}/>
    </div>
  );
}

export default App;
