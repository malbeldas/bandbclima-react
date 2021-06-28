import './App.css';
import { Home } from './views/home/Home';
import { ProductDetail } from './views/productDetail/ProductDetail';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
