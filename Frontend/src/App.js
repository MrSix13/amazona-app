
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      <div className="grid-container">
          <header className="row">
              <div>
                  <a className="brand" href="/">Amazona</a>
              </div>
              <div>
                  <a href="/cart">Cart</a>
                  <a href="/signin">Sign In</a>
              </div>
          </header>
          <main>
            <Route path="/product/:id"component={ProductScreen}/>
            <Route path="/" exact component={HomeScreen}/>

          </main>
          <footer className="row center">All Right Reserved</footer>
      </div>
    </Router>
  );
}

export default App;
