import React from 'react'
import styled, { css } from 'styled-components'

const ContentDiv = styled.div`
  width:200px;
  height: 200px;
  background-color: lightcoral;
  color: ${ (p) => p.color || 'green' };

  ${(p) => 
    p.private && css`
      font-style:bold;
      font-size:30px;
      color: lightgreen;
  `}
  
  /* &:hover{
    transform: scale(1.2);
  } */
  div{
    color:red;
    div{
      color:blue;
    }

  }


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
    </>
  )
}

export default Header