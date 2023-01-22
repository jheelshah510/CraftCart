import "./App.css";
import Navigation from "./components/Navigation";
import HomeSignIn from "./pages/HomeSignIn";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={Navigation} />
          <Route exact path="/register" component={HomeSignIn} />
          <Route exact path="/signin" component={SignIn} />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default App;
