import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import sellersignIn from "./pages/Sellersignin";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import SellerRegistration from "./pages/SellerRegistration";
import SellerDashProducts from "./pages/SellerDashProducts";
import SellerDashCustomerOrder from "./pages/SellerDashCustomerOrder";

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
          <Route exact path="/sellerregistration" component={SellerRegistration} />
          <Route exact path="/sellerdashcustomerorder" component={SellerDashCustomerOrder} />
          <Route exact path="/sellerdashproducts" component={SellerDashProducts} />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
