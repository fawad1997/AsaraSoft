import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Portfolio />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} AsaraSoft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;