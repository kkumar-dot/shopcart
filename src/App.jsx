// import Cart from "./pages/Cart";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cart from './components/Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { connect } from 'react-redux'
// import {Provider} from 'react-redux';
// import configureStore from './redux/store/configureStore';

// const store = configureStore();

const App = () => {
  return (
    // <Provider>
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/productList" element={<ProductList/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    // </Provider>
    // <Login/>
  )
};

export default App