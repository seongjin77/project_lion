import styled,{css} from "styled-components";

const setSize = ({size}) =>{

    switch(size){
        case 'large' :
        return css`
            width:322px
        `
    }

}

export const Button = styled.button`
    //공통 스타일
    padding: 14px;



`
