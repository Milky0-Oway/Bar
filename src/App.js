import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FoodCategory from "./Pages/FoodCategory";
import Bar from "./Pages/Bar";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import LoginSignup from "./Pages/LoginSingup";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Bar/>}/>
          <Route path='/rolls' element={<FoodCategory category='rolls'/>}/>
          <Route path='/pizza' element={<FoodCategory category='pizza'/>}/>
          <Route path='/burgers' element={<FoodCategory category='burgers'/>}/>
          <Route path='/drinks' element={<FoodCategory category='drinks'/>}/>
          <Route path='/other' element={<FoodCategory category='other'/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
