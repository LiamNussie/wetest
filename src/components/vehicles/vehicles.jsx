import './vehicles.scss';
import Bike from '../../assets/Vehicle Icons/bike.png';
import Salon from '../../assets/Vehicle Icons/saloon.png';
import Suv from '../../assets/Vehicle Icons/suv.png';
import Pickup from '../../assets/Vehicle Icons/pick-up.png';
import Van from '../../assets/Vehicle Icons/van.png';
import ImgHerobg from '../../assets/newbg.jpg';
import Truck from '../../assets/Vehicle Icons/truck.png';

const Vehicles = () => {
    return (
        <div className="vehicles">
            <div className="header">
                <h2 className="bld">Find Multiple Delivery Options</h2>
                {/* <p className="para">The easiest way people find every vehicle type to move their items across Lagos</p> */}
            </div>
            <div className="icons">
                <div className="grp">
                     <img src={Bike} alt="bike-icon" />
                     <p className="txt">Bikes</p>
                </div>
                <div className="grp">
                <img src={Salon} alt="bike-icon" />
                    <p className="txt">Saloon Cars</p>
                </div>
                <div className="grp">
                <img src={Suv} alt="bike-icon" />
                     <p className="txt">SUVs</p>
                </div>
                <div className="grp">
                <img src={Pickup} alt="bike-icon" />
                    <p className="txt">Pick-Ups</p>
                </div>
                <div className="grp">
                <img src={Van} alt="bike-icon" />
                    <p className="txt">Vans</p>
                </div>
                <div className="grp">
                <img src={Truck} alt="bike-icon" />
                    <p className="txt">Trucks</p>
                </div>
                
            </div>

            <div className="user-types">
                <div className="left">
                    <div className="top">
                        <p className="title">For Users</p>
                        {/* <p className="info">Get Started</p> */}
                        <div className="action">Request Item for Pickup Now</div>
                    </div>
                    <div className="bottom">
                        <button className='diff'>Download App<i className="fas fa-arrow-right"></i></button>
                        <button>Register<i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                            <p className="title">For Drivers</p>
                            <p className="info">Make Extra Income Delivering Items</p>
                        </div>
                        <div className="bottom">
                            <button>Find Out More<i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Vehicles;