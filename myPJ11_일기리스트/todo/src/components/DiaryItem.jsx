import React from "react";
import DiaryItemDiv from "./styled";

const DiaryItem = ({ id, author, content, emotion, created_date,setData,dummyList }) => {

    console.log('확인용',dummyList);

    const onDelete = (targetid) => {

        setData((prev) => {
           return prev.filter(v => v.id !== targetid )
        })

        console.log(targetid);
    }

    return (
        <DiaryItemDiv>
            <span>
                작성자 : {author} | 🌈 기분점수 : {emotion}
            </span>
            <br />
            <span>{new Date(created_date).toLocaleString()}</span>
            <div>{content}</div>
            <button onClick={()=>{onDelete(id)}}>삭제하기</button>
        </DiaryItemDiv>
    );
};

export default DiaryItem;
