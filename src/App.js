
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from "react-router-dom";
import ProductList from "./";


function App() {
  return (
    <div className="App">
      return (
      <Router>
       <nav>
                <ul>
                    <li>
                        <Link to="/products/category1">Category 1</Link>
                    </li>
                    <li></li>
                        <Link to="/products/category2">Category 2</Link>
                    </li>
                    <li>
                        <Link to="/products/category3">Category 3</Link>
                    </li>
                </ul>
            </nav>

        <Routes>
          <Route
            path="/products/category1"
            component={() => <ProductList category="category1" />}
          />
          <Route
            path="/products/category2"
            component={() => <ProductList category="category2" />}
          />
          <Route
            path="/products/category3"
            component={() => <ProductList category="category3" />}
          />
        </Routes>
      </Router>
      ); 
    </div>
  );
}

export default App;
