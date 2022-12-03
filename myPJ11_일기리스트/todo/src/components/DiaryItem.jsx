import React, { useState } from "react";
import DiaryItemDiv from "./styled";

const DiaryItem = ({ id, author, content, emotion, created_date, setData }) => {
    const [isEdit, setIsEdit] = useState(false);
    const onRevise = () => setIsEdit(!isEdit);

    const editCancle = () => {
        setIsEdit(!isEdit);
        setLocalContent(content);
    }; // 수정 취소

    const onEdit = (targetId, newContent) => {
        setData((prev) =>  prev.map((v) => v.id === targetId ? { ...v, content: newContent } : v)
        );
        setIsEdit(!isEdit);
        console.log("작동");
    }; // 수정 완료

    const [localContent, setLocalContent] = useState(content);

    const onRemove = (targetid) => {
        setData((prev) => {
            return prev.filter((v) => v.id !== targetid);
        });
    };

    return (
        <DiaryItemDiv>
            <span>
                작성자 : {author} | 🌈 기분점수 : {emotion}
            </span>
            <br />
            <span>{new Date(created_date).toLocaleString()}</span>
            <div>
                {isEdit ? (
                    <>
                        <textarea
                            onChange={(e) => setLocalContent(e.target.value)}
                            name=""
                            id=""
                            cols="60"
                            rows="5"
                            value={localContent}
                        ></textarea>
                    </>
                ) : (
                    <>{content}</>
                )}
            </div>
            {isEdit ? (
                <>
                    <button onClick={editCancle}>수정 취소</button>
                    <button onClick={() => {
                        onEdit(id, localContent)
                    }}>
                        수정 완료
                    </button>
                </>
            ) : (
                <>
                    <button
                        onClick={() => {
                            onRemove(id);
                        }}
                    >
                        삭제하기
                    </button>
                    <button onClick={onRevise}>수정하기</button>
                </>
            )}
        </DiaryItemDiv>
    );
};

export default DiaryItem;
