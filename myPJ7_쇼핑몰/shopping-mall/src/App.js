import './App.css';
import {Routes, Route} from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {

  const[authenticate,setAuthenticate] = useState(false) // false면 로그인이 안됨

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<ProductAll/>}/>
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
    </Routes>
    </>

  );
}
export default App;
