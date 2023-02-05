import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import signIn from "./pages/SignIn";
import sellersignIn from "./pages/Sellersignin";
import register from "./pages/Register";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={Navigation} />
          <Route exact path="/signin" component={signIn} />
          <Route exact path="/sellersignin" component={sellersignIn} />
          <Route exact path="/register" component={register} />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
