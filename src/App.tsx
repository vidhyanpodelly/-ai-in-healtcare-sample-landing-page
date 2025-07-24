import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import WhyAttend from './components/WhyAttend';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Registration from './components/Registration';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <About />
      <WhyAttend />
      <Speakers />
      <Schedule />
      <Registration />
    </div>
  );
}

export default App;