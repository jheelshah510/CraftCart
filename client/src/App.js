import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SellersignIn from "./pages/Sellersignin";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import SellerRegistration from "./pages/SellerRegistration";
import SellerDashProducts from "./pages/SellerDashProducts";
import SellerDashCustomerOrder from "./pages/SellerDashCustomerOrder";
import SellerAccountInfo from "./pages/SellerAccountInfo";
import NewProductForm from "./pages/NewProductForm";
import ProductOrderDetails from "./pages/ProductOrderDetails";
import { UserInfoContextProvider } from "./context/UserInfoContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <UserInfoContextProvider>
          <BrowserRouter>
            <Route exact path="/" component={Navigation} />

            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/sellersignin" component={SellersignIn} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/productdetails/:id"
              component={ProductDetails}
            />
            <Route
              exact
              path="/sellerregistration"
              component={SellerRegistration}
            />
            <Route
              exact
              path="/sellerdashcustomerorder"
              component={SellerDashCustomerOrder}
            />
            <Route
              exact
              path="/sellerdashproducts"
              component={SellerDashProducts}
            />
            <Route
              exact
              path="/selleraccountinfo"
              component={SellerAccountInfo}
            />
            <Route exact path="/newproductform" component={NewProductForm} />
            <Route
              exact
              path="/productorderdetails"
              component={ProductOrderDetails}
            />
          </BrowserRouter>
        </UserInfoContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
