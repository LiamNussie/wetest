import React, { useState } from "react";
import "./login.scss";
import Google from './googleIcon.svg';
import { signin } from '../../redux/actions/auth';
import { useHistory, Redirect, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as routes from '../../routing/route';
import { connect } from 'react-redux'
import ButtonLoader from "../../components/buttonLoader/buttonLoader";
import Logo from '../../assets/logo.svg';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser} = props;
  const formData = {
    email,
    password
  }
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true)
    console.log(formData);
    dispatch(signin(formData, history))
    
  }
  if(isAuthenticated && currentUser){
  return <Redirect to={routes.DashBoard}/>
  }
  return (
    <div className="login">
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <form onSubmit={handleSubmit}>
          <img id="logo" src={Logo} alt="wehaulogo" />
          <h3>Sign in</h3>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <div className="p-word">
              <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              {showPassword && <i onClick={() => setShowPassword(prev => !prev)} className="fas fa-eye"></i>}
              {!showPassword && <i onClick={() => setShowPassword(prev => !prev)} className="fas fa-eye-slash"></i>}
            </div>
            
            <button type='submit'>{loading && <ButtonLoader />} Sign in</button>
            <Link to="/reset-password-mail" style={{textDecoration: "none"}}><p className="forgot">Forgot password ?</p></Link>
            <Link to="/signup" style={{textDecoration: "none"}}><p className="forgot">Don't have an account? <span style={{color: "#113E82"}} className="forgot">Sign up</span></p></Link>
            {/* <div className="google"><img style={{transform: 'translateY(7px)', marginRight: '8px'}} src={Google} alt="" /><span>Sign in with google</span></div> */}
          </form>
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({userData})=> ({
  isAuthenticated: userData.isAuthenticated,
  currentUser: userData.currentUser
})

export default connect(mapStateToProps, null)(Login);
