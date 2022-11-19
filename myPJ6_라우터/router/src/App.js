import Homepage from "./page/Homepage";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import {Routes, Route,Navigate} from 'react-router-dom';
import Loginpage from "./page/Loginpage";
import {useState} from 'react';
import Userpage from "./page/Userpage";
function App() {
  const [authenticate,setAuthenticate] = useState(true);
  const Private = () => {
      return authenticate == true ? <Userpage/> : <Navigate to={'/login'}/>
  };

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id/:num" element={<ProductDetail/>}/>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/user" element={<Private/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
