import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'
import "./css/footer.css";   

function Footer() {
  return (
    <div className="footer-container ">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the newsletter to receive out best vacation deals.
            </p>
            <p className="footer-subscription-text ">
                You can unsubscribe at anytime.
            </p>
            <form>
                <input type="email" className='footer-input' placeholder="Your email..." />
                <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
        </section>  
       
        <small className="website-rights">Damzxyno Travels © 2020</small>
    </div>
  )
}

export default Footer