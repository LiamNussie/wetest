import './App.css';
import Banner from './components/banner/banner';
import Drivers from './components/drivers/drivers';
import Faqs from './components/faqs/faqs';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Navbar from './components/navbar/navbar';
import UseCases from './components/useCases/useCases';
import Usps from './components/usps/usps';
import Vehicles from './components/vehicles/vehicles';
import WorkFlow from './components/workflow/workflow';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Customer from './pages/customer/customer';
import 'react-toastify/dist/ReactToastify.css';
import Driver from './pages/driver/driver';
import { ToastContainer } from 'react-toastify';
import Privacy from './pages/privacy/privacy';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Customer} />
        <Route exact path="/drivers" component={Driver} />
        <Route exact path="/privacy_policy" component={Privacy} />
      </Switch>
      {/* <UseCases />
      <Banner />
      <Faqs />
      <Footer /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
