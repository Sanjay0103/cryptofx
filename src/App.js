import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;