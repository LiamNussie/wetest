import './reglog.scss';
import { useState } from 'react';
import ButtonLoader from '../../components/buttonLoader/buttonLoader';
import { Link } from 'react-router-dom';
import Logo from '../../assets/wehaulogo2.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

const Reglog = ({setRegLogModal}) => {

    const [loading, setLoading] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState();

    const [page, setPage] = useState('customer');
    const history = useHistory();

    const formData = {
        email,
        password
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true) 

        try {
            const { data } = await axios.post(`https://app.wehaul247.com/api/v1/auth/${page}/login`, formData);
            console.log(data, data.token)
            setLoading(false)
            await localStorage.setItem(`WEHAUL_${page.toUpperCase()}_TOKEN`, data.token);
            window.location.href = `https://${page}.wehaul247.com`
         } catch (error) {
             setLoading(false)
            console.log(error?.response?.data?.message)
            toast.error(error?.response?.data?.message, {
               position: toast.POSITION.TOP_CENTER
            })
         }
    }

    return (
        <div className="reglog">
            <div className="wrapperv">
                <div className="modalv">
                    <i onClick={() => setRegLogModal(false)} className="fas fa-times"></i>
                    <div className="container">

                        <ul className="nav">
                            <li onClick={() => setPage('customer')} className={page === 'customer' ? 'active' : null}>Customer</li>
                            <li onClick={() => setPage('driver')} className={page === 'driver' ? 'active' : null}>Driver</li>
                            <li onClick={() => setPage('merchant')} className={page === 'merchant' ? 'active' : null}>Merchant</li>
                            <li onClick={() => setPage('enterprise')} className={page === 'enterprise' ? 'active' : null}>Enterprise</li>
                        </ul>
        {/* <div className="left"></div> */}
        <div className="right">
        {/* <form>
                    <input type="email" placeholder="Enter Email Address" />
                    <input type="" placeholder="Enter Password" />
                    <div className="flex-line">
                        <button>Request Pick-Up</button>
                        <p className="or">OR</p>
                        <div className="imgs">
                            
                        </div>
                    </div>
                    
                </form> */}
          <form onSubmit={handleSubmit}>
          <img id="logo" src={Logo} alt="wehaulogo" />
          <h3>Sign in as {page}</h3>
          <div className="inp">
              <i className="fas fa-envelope"></i>
               <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            <div className="p-word inp">
                <i className="fas fa-lock"></i>
              <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              {showPassword && <i onClick={() => setShowPassword(prev => !prev)} className="fas fa-eye eyes"></i>}
              {!showPassword && <i onClick={() => setShowPassword(prev => !prev)} className="fas fa-eye-slash eyes"></i>}
            </div>
            
            <div className="btn">
                            <button>{loading ? "Signing In..." : " Sign In"}</button>
                            <i className="fas fa-arrow-right"></i>
            </div>
            <Link to="/reset-password-mail" style={{textDecoration: "none"}}><p className="forgot">Forgot password ?</p></Link>
            <Link to="/signup" style={{textDecoration: "none"}}><p className="forgot vb">Don't have an account? <span style={{color: "#113E82"}} className="forgot">Sign up</span></p></Link>
          </form>
          
        </div>
      </div>
                </div>
            </div>
        </div>
    )
}

export default Reglog;