import "./App.css";
import Navigation from "./components/Navigation";
import Register from "./pages/Register";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Navigation} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={SignIn} />
      </BrowserRouter>
    </div>
  );
}

export default App;
