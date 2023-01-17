import "./App.css";
import Navigation from "./components/Navigation";
import HomeSignIn from "./pages/HomeSignIn";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Navigation} />
        <Route exact path="/register" component={HomeSignIn} />
        <Route exact path="/signin" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
