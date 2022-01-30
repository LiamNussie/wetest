import Drivers from "../../components/drivers/drivers"
import Hero from "../../components/hero/hero"
import Usps from "../../components/usps/usps"
import UseCases from '../../components/useCases/useCases';
import Banner from '../../components/banner/banner';
import Faqs from '../../components/faqs/faqs';
import Footer from '../../components/footer/footer';
import Vehicles from "../../components/vehicles/vehicles";
import WorkFlow from "../../components/workflow/workflow";


const Customer = () => {
    return (
        <div className="customer">
            <Hero />
            <Vehicles />
            <WorkFlow bg="#ecf5fd" />
            <Usps />
            <Drivers />
            <UseCases />
            <Banner />
            <Faqs />
            <Footer />
        </div>
    )
}

export default Customer