import {React, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Hero from '../section/Hero.jsx'
import Services from '../section/Services.jsx'
import Testimonials from '../section/Testimonials.jsx'
import OurWork from '../section/OurWork.jsx'
import HelpSupport from '../section/HelpSupport.jsx'
import AboutUs from '../section/AboutUs.jsx'

function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      scroller.scrollTo(id, {
        duration: 800,
        smooth: 'easeInOutQuart',
        offset: -70, 
      });
    }
  }, [location]);
  
  return (
    <>
      <Hero/>
      <Services/>
      <AboutUs/>
      <OurWork/>
      <Testimonials/>
      <HelpSupport/>
    </>
    
  )
}

export default Home