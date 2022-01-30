import './driBanner.scss';
import Google from '../../../assets/google-download.png';
import Apple from '../../../assets/apple-download.png';

const DriBanner = () => {
    return (
        <div className="dri-banner">
            <div className="top-x">The People Platform</div>
            <p className="bold">Be your own boss, <br /> enjoy flexible hours.</p>
            <p className="para">Behind every successful business is a thriving team, Hire, pay, insure, and support <br /> your employees with Gusto's all-in-one people platform.</p>
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
            <p className="info">REGISTER OR REQUEST TO MOVE AN ITEM NOW</p>
        </div>
    )
}

export default DriBanner;