import React from 'react'
import {Link} from 'react-router-dom';
import "./css/button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"]
function Button(props) {
    const checkButtonStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(props.buttonStyle) ? props.buttonStyle : SIZES[0];
    console.log(props)
  return (
    <Link to="/home" className="btn--mobile">
        {console.log(checkButtonStyle)}
        <input 
        type="button" 
        value={props.children} 
        onClick={props.onClick}
        className= {`btn ${checkButtonSize} ${checkButtonStyle}`}
        />
    </Link>
  )
}

export default Button 