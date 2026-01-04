import React from 'react';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Section Components
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Services from './components/Sections/Service';
import Mentors from './components/Sections/Mentors';
import ExpertInstructor from './components/Sections/ExperienceMentor';
import OfficeLocations from './components/Sections/OfficeLocation';
import Client from './components/Sections/Client';
import Biaya from './components/Sections/Biaya';
import TestimoniVideo from './components/Sections/TestimoniText';
import TestimoniText from './components/Sections/TestimoniVideo';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Mentors />
        <ExpertInstructor />
        <OfficeLocations />
        <Client />
        <Biaya />
        <TestimoniText />
        <TestimoniVideo />
      </main>
      <Footer />
    </>
  );
}

export default App;