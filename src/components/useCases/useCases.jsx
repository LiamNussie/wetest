import './useCases.scss';
import Img1 from '../../assets/usecase1.jpg';
import Img2 from '../../assets/usecase2.jpg';


const UseCases = () => {
    return (
        <div className="usecases">
            <div style={{backgroundImage: `url(${Img1})`}} className="boxx">
                <p className="t-title">For Business Owners</p>
                <p className="title">Make money delivering your items to your customers</p>
                <p className="para">Make all your deliveries hassle-free, enjoy best prices and make money on deliveries.</p>
                <div className="btn">
                    <button>Find Out More<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Img2})`}} className="boxx">
                <p className="t-title">For Logistics Firms</p>
                <p className="title">Partner with WeHaul</p>
                <p className="para">Make more deliveries and enjoy multiple benefits.</p>
                <div className="btn">
                    <button>Find Out More<i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default UseCases;