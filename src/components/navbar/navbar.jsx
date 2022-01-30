import "./navbar.scss";
import Logo from "../../assets/wehaulogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Reglog from "../../pages/reglogModal/reglog";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expansible, setExpansible] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  console.log(window);

  return (
    <div className="navbar">
      <div className="left">
        <img src={Logo} alt="wehaul_logo" />
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <li>Home</li>
          </Link>
          <div className="mid">
            <li onClick={() => setExpansible(prev => !prev)}>Partner With Us<i className={expansible ? "fas fa-angle-down rotated" : "fas fa-angle-down"}></i></li>
            {expansible && (
              <ul className="expanse">
                  <Link onClick={() => setExpansible(false)} to="/drivers" style={{ textDecoration: "none" }}><li>Become a Driver</li></Link>
                  <li onClick={() => setExpansible(false)}>Become a Merchant</li>
                  <li onClick={() => setExpansible(false)}>Become an enterprise</li>
              </ul>
            )}
          </div>

          <li>About Us</li>
        </ul>
      </div>
      <div className="right">
        <Link to="/drivers">
          <button className="bcd">Become a Driver</button>
        </Link>
        <p onClick={() => setShowModal(true)} className="reg-log">
          Register / Login
        </p>
      </div>
      <div className="bar">
        {navOpen ? (
          <i onClick={closeNav} class="fas fa-times"></i>
        ) : (
          <i onClick={openNav} class="fas fa-bars"></i>
        )}
      </div>

      {showModal && <Reglog setRegLogModal={setShowModal} />}
      <Sidebar
        setShowModal={setShowModal}
        setNavOpen={setNavOpen}
        navOpen={navOpen}
      />
    </div>
  );
};

export default Navbar;
