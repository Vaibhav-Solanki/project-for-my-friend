import Navbar from "./compon/navbar.jsx";
import Home from "./compon/home.jsx";
import Feed from "./compon/feed.jsx";
import Login from "./compon/login.jsx";
import { Route } from "react-router-dom";
import Register from "./compon/register.jsx";
import About from "./compon/about.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Transaction from "./compon/transaction.jsx";
import Share from "./compon/share.jsx";
import Withdraw from "./compon/withdraw.jsx";
import Contact from "./compon/contact.jsx";
import PrivacyPolicy from "./compon/privacypolicy.jsx";
import Policy from "./compon/policy.jsx";
import Toc from "./compon/toc.jsx";
import Pricing from "./compon/prici.jsx";
import PayPage from "./compon/payPage.jsx";

function App() {
  return (
    <>
      <Navbar>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/transaction">
          <Transaction />
        </Route>
        <Route path="/share">
          <Share />
        </Route>
        <Route path="/withdraw">
          <Withdraw />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/Rpolicy">
          <Policy />
        </Route>
        <Route path="/toc">
          <Toc />
        </Route>
        <Route path="/paypage">
          <PayPage />
        </Route>
      </Navbar>
    </>
  );
}

export default App;
