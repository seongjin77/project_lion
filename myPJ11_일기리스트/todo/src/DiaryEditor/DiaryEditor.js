import React, { useRef, useState } from "react";
import { DiaryEditorDiv } from "./styled";

const DiaryEditor = () => {
    
    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });

    // preventDefault를 하면 제출이 아예 안된다. required 속성이 의미가 없어짐
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.author.length < 1) {
            alert("작성자는 최소 1글자 이상을 써주세요");
            //포커스
            authorInput.current.focus();
            return;
        }
        if (state.content.length < 5) {
            alert("내용은 5글자 이상 써주세요");
            //포커스
            contentInput.current.focus();
            return;
        }

        alert("저장성공");
    };

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <DiaryEditorDiv>
            <form>
                <h2>오늘의 일기</h2>
                <label htmlFor="author">작성자 : </label>
                <input
                    ref={authorInput}
                    name="author"
                    onChange={handleChangeState}
                    required
                />
                <div>
                    <textarea
                        ref={contentInput}
                        name="content"
                        onChange={handleChangeState}
                        required
                    />
                </div>
                <div>
                    <span>오늘의 감정점수 : </span>

                    <select
                        name="emotion"
                        value={state.emotion}
                        onChange={handleChangeState}
                    >
                        <option value={1}>1</option>

                        <option value={2}>2</option>

                        <option value={3}>3</option>

                        <option value={4}>4</option>

                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSubmit}>일기 저장하기</button>
                </div>
            </form>
        </DiaryEditorDiv>
    );
};

export { DiaryEditor };
