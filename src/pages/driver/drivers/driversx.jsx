import './driversx.scss';
import Img from '../../../assets/bike-landing.jpg';

const Driversx = () => {
    return (
        <div style={{backgroundImage: `url(${Img})`}} className="driversx">
            <div className="boxx">
                <div className="text">
                    <p className="top">Partner - Bike Logistics</p>
                    <p className="title">Drive & make more Money moving items from point A to B</p>
                    <p className="para">Join our pool of WEHAUL drivers and respond to pickup requests, set your own prices and work at your own convenience.</p>
                </div>
                <button>Find Out More<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Driversx;