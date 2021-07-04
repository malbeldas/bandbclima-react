import './App.css';
import { Home } from './views/home/Home';
import { ProductDetail } from './views/productDetail/ProductDetail';
import { Cart } from './views/cart/Cart';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

function App() {
  
  return (
    <CartProvider>
    <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/categories/:categoryId'>
            <Home />
          </Route>
          <Route exact path='/product/:id'>
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
      </Switch>
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;
