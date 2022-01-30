import './hero.scss';
import Google from '../../assets/google-download.png';
import Apple from '../../assets/apple-download.png';
import Typist from 'react-typist';
import TextLoop from 'react-text-loop';
import ImgHero from '../../assets/hero-img.jpg';
import ImgHerobg from '../../assets/newbg.jpg';
import { useState } from 'react';

const Hero = () => {
    const [itemName, setItemName] = useState('');
    const [itemPickup, setItemPickup] = useState('');
    const [itemDestination, setItemDestination] = useState('');

    // const handleForm

    return (
        <div className="hero">
            <div className="left">
                {/* <Typist> */}
                <h1 className="bld-txt">Move your <TextLoop><span>Gas Cooker</span><span>Food Items</span><span>Books/Suppl</span><span>Merchandise</span><span>Pets/Animals</span></TextLoop> <br /> from one location to the other</h1>
                {/* </Typist> */}
                <p className="para"><span>Register</span> or Request to move an item now</p>
                <form>
                    <div className="inp">
                        <input type="text" placeholder="Enter item name" />
                        <i className="fas fa-box"></i>
                    </div>
                    <div className="inp">
                        <input type="text" placeholder="Enter item pick-up address" />
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="inp">
                        <input type="text" placeholder="Enter item delivery address" />
                        <i style={{color: "#0bb10b"}} className="fas fa-map-marker-alt"></i>
                    </div>
                    
                    <div className="flex-line">
                        <div className="btn">
                            <button>Request Pick-Up</button>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                        
                        <p className="or">or</p>
                        <div className="imgs">
                            <div style={{marginRight: "50px", backgroundImage: `url(${Google})`, transform: "scale(1.4)"}} className="imgx"></div>
                            <div style={{backgroundImage: `url(${Apple})`, transform: "scale(1.4)"}} className="imgx"></div>
                        </div>
                    </div>
                    
                </form>
            </div>
            <div className="right" style={{backgroundImage: `url(${ImgHero})`}}>
                <div className="content">
                     <h1 className="bld-txt">Move your Gas Cooker from one location to the other</h1>
                <p className="para">Register or Request to move an item now</p>
                <form>
                    <input type="text" placeholder="Enter item name" />
                    <input type="text" placeholder="Enter item pick-up address" />
                    <input type="text" placeholder="Enter item delivery address" />
                    <div className="flex-line">
                        <button>Request Pick-Up</button>
                        <p className="or">OR</p>
                        <div className="imgs">
                            
                        </div>
                    </div>
                    
                </form>
                </div>
           
            </div>
        </div>
    )
}

export default Hero;