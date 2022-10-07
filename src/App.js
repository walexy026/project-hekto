import './App.css';
import NavBar from './Components/NavBar/NavBar';
import NavBarUpper from './Components/NavBarUpper/NavBarUpper';
import Footer from './Components/Footer/Footer';
import MyAccount from './Pages/MyAccount/MyAccount'
import OrderCompleted from './Pages/OrderCompleted/OrderCompleted'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBarUpper/>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductDetails/>}/>
          <Route path='/ShoppingCart' element={<ShoppingCart/>}/>
          <Route path='/MyAccount' element={<MyAccount/>}/>
          <Route path='/OrderCompleted' element={<OrderCompleted/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
