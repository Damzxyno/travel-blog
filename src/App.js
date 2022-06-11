import React, {Fragment} from "react";
import './App.css';
import NavBar from './component/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Easy from "./component/Easy";


function App() {
  return (

    <Fragment>
    <Router>

      <NavBar />
      <Routes>
         <Route path='/' exact />
      </Routes>

    </Router>
    </Fragment>
  );
}

export default App;
