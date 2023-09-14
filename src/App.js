import React from 'react';
import Navbar from './compon/navbar';
import Home from './compon/home';
import Feed from './compon/feed';
import Login from './compon/login';
import {Route} from "react-router-dom";
import Register from './compon/register';
import About from './compon/about';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Transaction from './compon/transaction';
import Share from './compon/share';
import Withdraw from './compon/withdraw';
import Contact from './compon/contact';
import Privacypolicy from './compon/privacypolicy';
import Rpolicy from './compon/policy';
import Toc from './compon/toc';
import Pricing from './compon/prici';
import Paypage from './compon/payPage';

function App() {
  return (
<>
<Route exact path="/">
<Home/>
</Route>
<Route path="/feed">
<Feed/>
</Route>
<Route path="/login">
<Login/>
</Route>
<Route path="/register">
<Register/>
</Route>
<Route path="/About">
<About/>
</Route>
<Route path="/transaction">
<Transaction/>
</Route>
<Route path="/share">
<Share/>
</Route>
<Route path="/withdraw">
<Withdraw/>
</Route>
<Route path="/Pricing">
<Pricing/>
</Route>
<Route path="/contact">
<Contact/>
</Route>
<Route path="/policy">
<Privacypolicy/>
</Route>
<Route path="/Rpolicy">
<Rpolicy/>
</Route>
<Route path="/toc">
<Toc/>
</Route>
<Route path="/paypage">
<Paypage/>
</Route>
<Navbar/>
</>
);
}

export default App;
