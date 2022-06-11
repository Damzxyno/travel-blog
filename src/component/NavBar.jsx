 import React, {useState, useEffect} from 'react';
 import {Link} from "react-router-dom";
import Button from './Button';

import "./css/navbar.css"
 
 function NavBar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const links = {
     HOME_LINK : "/home",
     PRODUCTS_LINK : "/product",
     SERVICES_LINK : "/services",
     SIGN_UP_LINK : "/sign-up"
   }

   const closeMobileMenu = () => {setClick(false)}

   const showButton = () =>  {
     if (window.innerWidth <=960){
        setButton(false)
     } else {
       setButton(true) 
     }
   };
   
   window.addEventListener("resize", showButton)

   useEffect(() =>showButton(), []);

   return (
     <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                DAMZXY TRAVELS
                </Link> 
            </div> 
            <div className="menu-icon" onClick={()=> setClick(!click)}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} / >
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"} >
                <li>
                  <Link to={links.HOME_LINK} className="nav-links" onClick={closeMobileMenu}>HOME</Link>
                </li>
                <li>
                  <Link to={links.SERVICES_LINK} className="nav-links" onClick={closeMobileMenu}>SERVICES</Link>
                </li>
                <li>
                  <Link to={links.PRODUCTS_LINK} className="nav-links" onClick={closeMobileMenu}>PRODUCTS</Link>
                </li>
                <li>
                  <Link to={links.SIGN_UP_LINK} className="nav-links" onClick={closeMobileMenu}>SIGN-UP</Link>
                </li>
            </ul>
             {button && <Button buttonStyle="btn--primary">SIGN UP</Button>}
         </nav>
     </>

   )
 }
 
 export default NavBar