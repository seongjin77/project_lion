import styled from "styled-components";

const DiaryItemDiv = styled.div`
    margin-bottom:20px; 
    background-color: honeydew;
    padding:20px;
    border-radius: 15px;

    span{
        margin-bottom:10px;
        display:inline-block;
    }

    br + span{
        padding-bottom: 10px;
        border-bottom: 2px solid cornflowerblue;
        width: 100%;
    }

    div{
        margin-top:20px;
        margin-bottom: 20px;
    }



`
export default DiaryItemDiv