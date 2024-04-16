import React, { useEffect } from 'react';
import './App.css';
import Footer from './component/Footer';
import LandingSection from './component/LandingSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
     
      <LandingSection/>
      <Footer/>
    </div>
  );

}
export default App;


