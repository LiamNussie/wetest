import './sidebar.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/wehaulogo.png';

const Sidebar = ({setNavOpen, navOpen}) => {
    const [showRegLinks, setShowRegLinks] = useState(false);

    const handleShow = () => {
        setShowRegLinks(true);

    }

  return <div className='sidebar' id={navOpen ? "slideIn" : null}>
      <img src={Logo} alt="wehaul logo" />
      <ul className='main-links'>
            <Link onClick={() => setNavOpen(false)} to="" style={{textDecoration: "none", color: "#fff"}}><li><i className='fas fa-home'></i>Home</li></Link>
            <Link onClick={() => setNavOpen(false)} to="" style={{textDecoration: "none", color: "#fff"}}><li><i className='fas fa-home'></i>Partner With Us</li></Link>
            <Link onClick={() => setNavOpen(false)} to="" style={{textDecoration: "none", color: "#fff"}}> <li><i className='fas fa-list'></i>About Us</li></Link>
            <Link onClick={() => setNavOpen(false)} to="/drivers" style={{textDecoration: "none", color: "#fff"}}><li><i className='fas fa-user-tie'></i>Become a Driver</li></Link>
            <li onClick={() => setShowRegLinks(prev => !prev)}><i className='fas fa-lock'></i>Register/Login <i className="fas fa-angle-down" id={showRegLinks ? "rotated" : null}></i></li>
      </ul>
      {showRegLinks && <ul className="reg-links">
          <li onClick={() => window.location.href = "https://customer.wehaul247.com"}>For Customers</li>
          <li onClick={() => window.location.href = "https://driver.wehaul247.com"}>For Drivers</li>
          <li onClick={() => window.location.href = "https://enterprise.wehaul247.com"}>For Enterprise</li>
          <li onClick={() => window.location.href = "https://merchant.wehaul247.com"}>For Merchants</li>
      </ul>}
  </div>;
};

export default Sidebar;
