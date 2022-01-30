import './workflow.scss';
import One from '../../assets/2.png';
import Two from '../../assets/3.png';
import Three from '../../assets/third.png';

const WorkFlow = ({bg}) => {
    return (
        <div className="workflow" style={{backgroundColor: bg}}>
            <p className="title">How It Works</p>
            <div className="first-sec">
                <div className="left">
                    <div className="comb">
                        <p className='span'>01</p>
                        <p className="head">Make Request for Item Pickup</p>
                    </div>
                    <p className="para">With Wehaul, All you need to do is set a pickup request with item image and to & fro destinations.</p>
                </div>
                <div className="right">
                    <div className="img" style={{backgroundImage: `url(${One})`}}></div>
                </div>
            </div>
            <div className="second-sec">
                <div className="left">
                    <div className="img" style={{backgroundImage: `url(${Two})`}}></div>
                </div>
                <div className="right">
                    <div className="comb">
                    <p className='span'>02</p>
                    <p className="head">Select a Delivery Driver</p>
                    </div>
                    <p className="para">Available drivers respond with pickup offers and you get to decide on a driver to come pick up your item based on pickup costs.</p>
                </div>
            </div>
            <div className="third-sec">
                <div className="left">
                    <div className="comb">
                        <p className='span'>03</p>
                        <p className="head">Your Item Gets Delivered</p>
                    </div>
                    <p className="para">Have no worries as driver leaves with item for destination as you can monitor progress of trip and also communicate with driver till delivery is fufilled.</p>
                </div>
                <div className="right">
                    <div className="img" style={{backgroundImage: `url(${Three})`}}></div>
                </div>
            </div>
        </div>
    )
}

export default WorkFlow;