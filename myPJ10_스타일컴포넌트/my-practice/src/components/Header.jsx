import React from 'react'
import styled, { css } from 'styled-components'

const setSize = (size) => {
  switch (size) {
    case "large":
      return css`
        padding: 19px 0;
        font-size: 24px;
        line-height: 30px;
      `;
    case "medium":
      return css`
        padding: 19px 0;
        font-size: 18px;
        line-height: 22px;
      `;
    case "sm":
      return css`
        padding: 17px 0;
        line-height: 20px;
        color:blue;
      `;
    default:
      return css`
        padding: 10px 0;
      `;
  }
};

const ContentDiv = styled.div`
  width:200px;
  height: 200px;
  background-color: lightcoral;
  color: ${ (p) => p.color || 'green' };
 
  ${(p) =>{
    console.log('제발 이거 알아봐',p.private)
      p.private && css`
      font-style:bold;
      font-size:30px;
      color: lightgreen;
  `}}
  
  /* &:hover{
    transform: scale(1.2);
  } */
  div{
    color:red;
    div{
      color:blue;
    }

  }

  ${({ size }) => setSize(size)}

`

const Header = () => {
  return (
    <>
    <ContentDiv>
        이건헤드안 스타일 컴포넌트
    </ContentDiv>
    <ContentDiv color='black'>하이하이

    </ContentDiv>
    <ContentDiv private >프라이빗
      <div>첫번쨰 자식
        <div>두번째 자식</div>
      </div>
    </ContentDiv>
    <ContentDiv size={'large'} >지울거</ContentDiv>
    </>
  )
}

export default Header