import { useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
function App() {
  const cart = useSelector(state=>state.cart);
  const {cartItems} = cart;
  return (
    <Router>
      <div className="grid-container">
          <header className="row">
              <div>
                  <Link className="brand" to="/">Amazona</Link>
              </div>
              <div>
                  <Link to="/cart">
                    Cart
                    {cartItems.length>0 && (
                      <span className="badge">{cartItems.length}</span>
                    )}
                  </Link>
                  <Link to="/signin">Sign In</Link>
              </div>
          </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id"component={ProductScreen}/>
            <Route path="/" exact component={HomeScreen}/>

          </main>
          <footer className="row center">All Right Reserved</footer>
      </div>
    </Router>
  );
}

export default App;
