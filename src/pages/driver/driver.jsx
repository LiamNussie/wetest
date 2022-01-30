import WorkFlow from "../../components/workflow/workflow";
import DriBanner from "./dri-banner/driBanner";
import Driversx from "./drivers/driversx";
import Steps from "./steps/steps";
import Whyuse from "./whyuse/whyuse";
import UseCases from '../../components/useCases/useCases';
import Banner from '../../components/banner/banner';
import Faqs from '../../components/faqs/faqs';
import Footer from '../../components/footer/footer';


const Driver = () => {
    return (
        <div className="driver">
            <Driversx />
            <DriBanner />
            <br />
            <br />
            <Whyuse />
            <Steps />
            <UseCases />
            <Banner />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Driver;