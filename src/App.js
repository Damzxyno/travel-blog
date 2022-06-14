import React, {Fragment} from "react";
import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/pages/Home";
import Destination from "./component/pages/Destination"

function App() {
  return (

    <Fragment>
    <Router>
      <NavBar />
      <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/destination/:id/' exact element={<Destination />} />
      </Routes>
    </Router>
    </Fragment>
  );
}

export default App;
