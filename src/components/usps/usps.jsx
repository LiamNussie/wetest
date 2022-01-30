import './usps.scss';
import Img1 from '../../assets/5.jpg';
import Img2 from '../../assets/usps2.jpg';
import Img3 from '../../assets/usps3.jpg';
import Img4 from '../../assets/paystack.png';

const Usps = () => {
    return (
        <div className="usps">
             <p className="title">Simplifying And Improving The Way We Move Items Across Locations</p>
            <div className="first-sec">
                <div className="left">
                    <div style={{backgroundImage: `url(${Img1})`}} className="img"></div>
                </div>
                <div className="right">
                    <div className="comb">
                        <p className="head">Easily move items now or schedule for later.</p>
                    </div>
                    <p className="para">Getting a vehicle & driver to move your item is really easy, whether dispatch bikes, cars, SUVs, vans, trucks and much more, there is an available option near you to pick up right now, later in the day, or another day.</p>
                </div>
            </div>
            <div className="second-sec">
                <div className="left">
                    <div className="comb">
                        <p className="head">Fast route planning.</p>
                    </div>
                    <p className="para">We have integrated live-tracking technology into our app, meaning that it's even easier to get from A to B, no matter where you're off to.</p>
                </div>
                <div className="right">
                    <div style={{backgroundImage: `url(${Img2})`, backgroundPosition: "bottom"}} className="img"></div>
                </div>
            </div>
            <div className="third-sec">
                <div className="left">
                    <div style={{backgroundImage: `url(${Img3})`}} className="img"></div>
                </div>
                <div className="right">
                    <div className="comb">
                        <p className="head">Drivers set pricing before you book.</p>
                    </div>
                    <p className="para">It's easy; all you need to do is add your items, enter your route and our app sends your request to drivers near you and each of them sets individual price offers with you getting to pick the best offer in terms of the price, vehicle profile and estimated arrival time.</p>
                </div>
            </div>
            <div className="fourth-sec">
                <div className="left">
                    <div className="comb">
                        <p className="head">100% secure payments</p>
                    </div>
                    <p className="para">Pay stress-free with our guaranteed secure payment system, powered by Paystack.</p>
                </div>
                <div className="right">
                    <div style={{backgroundImage: `url(${Img4})`, backgroundPosition: "center"}} className="img"></div>
                </div>
            </div>
        </div>
    )
}

export default Usps;