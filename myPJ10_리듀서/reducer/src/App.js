import { useReducer, useState } from "react";
import Student from "./student";

const reducer = (state, a) => {
    switch (a.type) {
        case "add-student":
            const name = a.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                student: [...state.student, newStudent],
            };
        case 'delete-student':
            return {
                count: state.count - 1,
                student: state.student.filter(
                    (student) => student.id !== a.payload.id
                ),
            };
          case 'mark' :
            return {
              count: state.count,
              student: state.student.map(student => {
                if(student.id === a.payload.id){
                  return {...student, isHere : !student.isHere}
                }
                return student
              })
            }
        default:
            return state;
    }
};

function App() {
    const initialState = {
        count: 0,
        student: [
            {
                id: Date.now(),
                name: "성진",
                isHere: true,
            },
        ],
    };

    const [name, setName] = useState("");
    const [studentInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수: {studentInfo.count}</p>
            <input
                type="text"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "add-student", payload: { name } });
                }}
            >
                추가
            </button>
            {studentInfo.student.map((student) => {
                return (
                    <Student
                        key={student.id}
                        name={student.name}
                        dispatch={dispatch}
                        id={student.id}
                        isHere={student.isHere}
                    />
                );
            })}
        </div>
    );
}

export default App;
