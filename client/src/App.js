import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
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
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import EditProductModal from "./components/EditProductModal";
import BuyerProfile from "./pages/BuyerProfile";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/sellersignin" component={SellersignIn} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/productdetails/:id" component={ProductDetails} />
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
          path="/sellerdashproducts/:sellerId"
          component={SellerDashProducts}
        />
        <Route
          exact
          path="/selleraccountinfo/:id"
          component={SellerAccountInfo}
        />
        <Route exact path="/newproductform" component={NewProductForm} />
        <Route
          exact
          path="/productorderdetails"
          component={ProductOrderDetails}
        />
        <Route exact path="/test" component={EditProductModal} />
        <Route exact path="/profile/:id" component={BuyerProfile} />
      </BrowserRouter>
    </>
  );
}

export default App;
