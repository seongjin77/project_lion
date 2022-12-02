import styled from 'styled-components';

export const DiaryEditorDiv = styled.div`
    border: 1px solid gray;
    text-align: center;
    padding: 20px;

    h2{
        font-size:30px;
        margin-bottom:20px;
        margin-top:10px;

    }

    input,textarea{
        margin-bottom:20px;
        width: 500px;
        padding: 10px;
    }

    textarea{
        height:150px;
        width: 560px;
    }

    select{
        width:300px;
        padding: 10px;
        cursor: pointer;
        margin-bottom:30px;
    }

    button{
        width: 500px;
        padding: 10px;
        cursor: pointer;
    }


`