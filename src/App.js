import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './HomePage/Index';
import AboutUs from './StaticPages/AboutUs';
import Footer from './Common/Footer';
import Header from './Common/Header';
import PrivacyPolicy from './StaticPages/PrivacyPolicy';
import ContactUs from './StaticPages/ContactUs';
import React, {lazy, Suspense} from 'react';
import CircularColor from './Common/Loader';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

// const PrivacyPolicy = lazy(()=>import("./StaticPages/PrivacyPolicy"))
// const ContactUs = lazy(()=>import("./StaticPages/ContactUs"))
// const AboutUs = lazy(()=>import("./StaticPages/AboutUs"))
// const Footer = lazy(()=> import("./Common/Footer"))
const renderLoader = () => <><CircularColor/></>


function App() {

  useEffect(() => {
    ReactGA.initialize('G-XJPTYDF0CE');
  }, []);


  return (
    <BrowserRouter>
        <div className="App" id="3000">
          <Header />
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/contact-us' element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
