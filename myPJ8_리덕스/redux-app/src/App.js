import { useState } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={ ()=>{
        dispatch({type:'increment',payload:5})
        }}>증가</button>
      <button onClick={()=> {
        dispatch({type: 'decrement'})
      }}>감소</button>
    </div>
  );
}

export default App;
