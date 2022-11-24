import React from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
  width:200px;
  height: 200px;
  background-color: lightcoral;
`

const Header = () => {
  return (
    <ContentDiv>
        이건헤드안 스타일 컴포넌트
    </ContentDiv>
  )
}

export default Header