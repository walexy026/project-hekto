import './App.css';
import NavBar from './Components/NavBar/NavBar';
import NavBarUpper from './Components/NavBarUpper/NavBarUpper';
import Footer from './Components/Footer/Footer';
import FooterDown from './Components/FooterDown/FooterDown';
import MyAccount from './Pages/MyAccount/MyAccount'
import OrderCompleted from './Pages/OrderCompleted/OrderCompleted'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Partner from './Components/Partners/Partner';
import ProductTitle from './Components/ProductTitle/ProductTitle';
function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <NavBarUpper/>
      <NavBar/>
      <ProductTitle/>
        <Routes>
          <Route path='/' element={<ProductDetails/>}/>
          <Route path='/shoppingCart' element={<ShoppingCart/>}/>
          <Route path='/myAccount' element={<MyAccount/>}/>
          <Route path='/orderCompleted' element={<OrderCompleted/>}/>
        </Routes>

      <Partner/>
      <Footer/>
      <FooterDown/>

       </div>
      </BrowserRouter>
  );
}

export default App;
