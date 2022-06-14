import React from 'react'
import {Link} from 'react-router-dom';
import "./css/button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"]

function Button(props) {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(props.buttonSize) ? props.buttonStyle : SIZES[0];
    
  return (
    <Link to="/home" className="btn--mobile">
        <button 
        value={props.children} 
        onClick={props.onClick}
        className= {`btn ${checkButtonSize} ${checkButtonStyle}`}
        >
           {props.children}
        </button>
    </Link>
  )
}

export default Button 