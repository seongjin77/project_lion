import {createSlice} from '@reduxjs/toolkit';

let user = createSlice({
    name : '성진',
    initialState : 'kim',
    reducers : {
      changeName(){
        return 'seongjin'
      }
    }
});

export default user