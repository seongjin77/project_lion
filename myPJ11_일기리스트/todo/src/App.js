import { useState } from "react";
import { DiaryEditor } from "./DiaryEditor/DiaryEditor";
import DiaryList from "./List/DiaryList";

function App() {
    const [data, setData] = useState([]);
    console.log('app의 데이터',data);
  
    // { id, author, content, emotion, created_date }

    return (
        <div className="App">
            <DiaryEditor setData={setData} />
            <DiaryList dummyList={data} />
        </div>
    );
}

export default App;
