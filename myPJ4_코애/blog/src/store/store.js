import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store2';

//useState() 역할 비슷
// name과 initialState는 예약어.


export let {changeName} = user.actions



let user2 = createSlice({
    name : 'stock',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})

export default configureStore({
  reducer: {
        내이름 : user.reducer,
        상품 : user2.reducer
   }
}) 