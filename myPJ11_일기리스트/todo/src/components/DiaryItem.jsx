import React from "react";
import DiaryItemDiv from "./styled";

const DiaryItem = ({ id, author, content, emotion, created_date }) => {
    console.log(created_date);
    return (
        <DiaryItemDiv>
            <span>
                작성자 : {author} | 감정점수 : {emotion}
            </span>
            <br />
            <span>{new Date(created_date).toLocaleString()}</span>
            <div>{content}</div>
        </DiaryItemDiv>
    );
};

export default DiaryItem;
