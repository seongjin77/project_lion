import React from "react";

const Student = ({ name, dispatch, id, isHere }) => {
    console.log('오긴와?', isHere)
    return (
        <>
            <div>
                <span
                    style={{
                        textDecoration: isHere ? "line-through" : "none",
                        color: isHere ? "gray" : "black",
                    }}
                    onClick={() => {
                        dispatch({type: 'mark', payload : {id}})
                    }}
                >
                    {name}
                </span>
                <button
                    onClick={() => {
                        dispatch({ type: "delete-student", payload: { id } });
                    }}
                >
                    삭제
                </button>
            </div>
        </>
    );
};

export default Student;
