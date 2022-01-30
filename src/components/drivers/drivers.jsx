import './drivers.scss';
import Img from '../../assets/driver-landing.jpg';

const Drivers = () => {
    return (
        <div style={{backgroundImage: `url(${Img})`}} className="drivers">
            <div className="box">
                <div className="text">
                    <p className="title">Drive & make more Money moving items from point A to B</p>
                    <p className="para">Join our pool of WEHAUL drivers and respond to pickup requests, set your own prices and work at your own convenience.</p>
                </div>
                <button>Find Out More<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Drivers;