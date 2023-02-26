import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
