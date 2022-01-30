import './steps.scss';
import Img1 from '../../../assets/pic1.svg';
import Img2 from '../../../assets/pic2.svg';
import Img3 from '../../../assets/pic3.svg';
import Img4 from '../../../assets/pic4.svg';

const Steps = () => {
    return (
        <div className="steps">
            <p className="head">Get Started</p>
            <div className="sec">
                <div style={{backgroundImage: `url(${Img1})`}} className="img"></div>
                <div className="txt">
                    <i class="fas fa-square-full"></i>
                    <p className="ttitle">1. Sign up online</p>
                    <p className="ppara">Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started.</p>
                </div>
            </div>
            <div className="sec">
                <div style={{backgroundImage: `url(${Img2})`}} className="img"></div>
                <div className="txt">
                    <i class="fas fa-square-full"></i>
                    <p className="ttitle">2. Upload your documents</p>
                    <div className="ppara">There are some of the documents we need to see:</div>
                    <ul className="list">
                        <li>Valid Nigerian drivers license</li>
                        <li>LASRAA card</li>
                        <li>Valid LASDRI card (Lagos only)</li>
                        <li>Minimum of 21 years of age</li>
                        <li>Driver profile photo</li>
                        <li>Safety screening and virtual info session</li>
                    </ul>
                </div>
            </div>
            <div className="sec">
                <div style={{backgroundImage: `url(${Img3})`}} className="img"></div>
                <div className="txt">
                    <i class="fas fa-square-full"></i>
                    <p className="ttitle">3. Get a vehicle</p>
                    <p className="ppara">Make sure that your vehicle is in excellent working and physical condition, so that it meets our standards in Nigeria.</p>
                </div>
            </div>
            <div className="sec">
                <div style={{backgroundImage: `url(${Img4})`}} className="img"></div>
                <div className="txt">
                    <i class="fas fa-square-full"></i>
                    <p className="ttitle">4. Activate your account</p>
                    <p className="ppara">If you've completed all the above steps, congratulations! You're ready to activate your account and start making money.</p>
                </div>
            </div>
        </div>
    )
}

export default Steps;