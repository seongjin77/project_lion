import React from "react";
import DiaryItemDiv from "./styled";

const DiaryItem = ({ id, author, content, emotion, created_date }) => {
    return (
        <DiaryItemDiv>
            <span>
                작성자 : {author} | 🌈 기분점수 : {emotion}
            </span>
            <br />
            <span>{new Date(created_date).toLocaleString()}</span>
            <div>{content}</div>
            <button onClick={()=>{console.log(id)}}>삭제하기</button>
        </DiaryItemDiv>
    );
};

export default DiaryItem;
