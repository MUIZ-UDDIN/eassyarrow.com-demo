import React from 'react';
import Hero from './components/Pages/Hero';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import HowItWorks from './components/Pages/HowItWorks';
import DocumentSupport from './components/Pages/DocumentSupport';
import AdmissionResult from './components/Pages/AdmissionResult';
import Testimonials from './components/Pages/Testimonials';
import FAQ from './components/Pages/FAQ';
import Contact from './components/Pages/Contact';
import Footer from './components/Pages/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <DocumentSupport />
      <AdmissionResult />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
