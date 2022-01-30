import './banner.scss';
import Google from '../../assets/google-download.png';
import Apple from '../../assets/apple-download.png';
import Img from '../../assets/6.jpg';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${Img})`}} className="banner">
            <div className="overlay"></div>
            <p className="bold">Move your Items with Ease <br /> from Point A to B.</p>
            <div className="icons">
                <div style={{marginRight: "90px", backgroundImage: `url(${Google})`, transform: "scale(1.7)"}} className="imgx"></div>
                <div style={{backgroundImage: `url(${Apple})`, transform: "scale(1.7)"}} className="imgx"></div>
            </div>
            <p className="info">Currently operates only in Lagos.</p>
        </div>
    )
}

export default Banner;