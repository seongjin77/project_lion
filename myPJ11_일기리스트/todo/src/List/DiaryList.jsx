import React from "react";
import DiaryItem from "../components/DiaryItem";
import DiaryListDiv from "./styled";



const DiaryList = ({ dummyList,setData}) => {


    return (
        <DiaryListDiv>
        
            <h3>
            {dummyList.length}의 리스트가 있습니다.
            </h3>
            {dummyList.map((it) => (
// fragment로 감싸주어도 최상단에 key 값이 없으면 오류가 뜸
                // 컴포넌트를 내릴때 프로퍼티를 안쓰고 스프레드 연산자를 써서 내릴 수 있다.
                <DiaryItem key={it.id} setData={setData}  dummyList={dummyList} {...it} />
            ))}
        

        </DiaryListDiv>
    );
};
// undefined로 내려질 것 같은 props의 값의 디폴트 값을 정해줄 수 있다. 함수 밖에서 사용해야함.
DiaryList.defaultProps = {
    dummyList: [],
};

export default DiaryList;
