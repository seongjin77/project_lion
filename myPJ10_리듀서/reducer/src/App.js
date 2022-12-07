import { useReducer, useState } from "react";


const reducer = (state,action) => {
    console.log('reducer작동', state, action);
}

function App() {
    const [number, setNumber] = useState(0);
    const [money,dispatch] = useReducer(reducer,0);
    return (
        <div>
            <h2>useReducer 은행</h2>
            <p>잔고 : {money}원</p>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                step="1000"
            />
            <button onClick={()=> {
              dispatch({type: 'deposit'})
            }} >예금</button>
            <button>출금</button>
        </div>
    );
}

export default App;
