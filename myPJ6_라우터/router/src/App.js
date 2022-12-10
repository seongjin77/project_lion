import Homepage from "./page/Homepage";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import {Routes, Route,Navigate,Link,useNavigate} from 'react-router-dom';
import Loginpage from "./page/Loginpage";
import {useState} from 'react';
import Userpage from "./page/Userpage";
import './app.css'
import { Test } from "./page/Test";
function App() {
  const [authenticate,setAuthenticate] = useState(false);

  const Private = () => {
      return authenticate === true ? <Userpage/> : <Navigate to={'/login'}/>
  };

  let navigate = useNavigate();

  return (
    <div className="App">
      <button onClick={()=>{ navigate('/')}}>홈페이지</button>
      <Link className="hi" to='/about'>어바웃</Link>
      <button onClick={()=> {navigate('/?num=5')}}>유즈파람</button>
      <button onClick={()=> {navigate('/user')}}>개인정보</button>
      
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id/:num?q=sss" element={<ProductDetail/>}/>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/user" element={<Private/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
