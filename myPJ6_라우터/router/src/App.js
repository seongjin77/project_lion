import Homepage from "./page/Homepage";
import About from "./page/About";
import Product from "./page/Product";
import ProductDetail from "./page/ProductDetail";
import {Routes, Route} from 'react-router-dom';

function App() {
  const Private = () => {
      return 
  };

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id/:num" element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}
export default App;
