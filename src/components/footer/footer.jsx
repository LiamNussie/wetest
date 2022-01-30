import React from 'react';
import './footer.scss';
import Playstore from './playstore.svg';
import Logo from '../../assets/wehaulogo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="content">
                <img className="logo" src={Logo} alt="wehaullogo" />
                <div className="links">
                    <ul>
                        <li className="titlex">Product</li>
                        <li>Request Delivery</li>
                        <li>Enterprise</li>
                        <li>Merchant</li>
                    </ul>
                    <ul>
                        <li className="titlex">Support</li>
                        <li>Contact us</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li className="titlex">Company</li>
                        <li>About us</li>
                        <Link style={{textDecoration: "none", color: "#292929"}} to="/privacy_policy"><li>Privacy policy</li></Link>
                        <li>Terms and conditions</li>
                    </ul>
                </div>
                <div className="socials">
                   <p className="any">Any Questions ?</p>
                   <a href="mailto:hello@wehaul247.com" className="mail">hello@wehaul247.com</a>
                   <p className="xtra">Feel free! We speak human language <br /> and like to receive feedback.</p>
                   <div className="icons">
                       <i className="fab tmp fa-instagram"></i>
                       <i className="fab tmp fa-twitter"></i>
                       <i className="fab tmp fa-facebook-square"></i>
                   </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;