import { useSelector, useDispatch } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
function App() {
  const cart = useSelector(state=>state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=>state.userSignin);
  const {userInfo} = userSignin
  const dispatch = useDispatch();
  const signoutHandler = ()=>{
      dispatch(signout())
  };
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
                  {userInfo ? (
                    <div className="dropdown">
                      <Link to="#">
                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                      </Link>
                      <ul className="dropdown-content">
                          <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                      </ul>
                    </div>
                  ):(
                    <Link to="/signin">Sign In</Link>
                  )}
              </div>
          </header>
          <main>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/products/:id"component={ProductScreen}/>
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/" exact component={HomeScreen}/>

          </main>
          <footer className="row center">All Right Reserved</footer>
      </div>
    </Router>
  );
}

export default App;
