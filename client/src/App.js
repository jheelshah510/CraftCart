import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import sellersignIn from "./pages/Sellersignin";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={Navigation} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/sellersignin" component={sellersignIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/productdetails" component={ProductDetails} />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
