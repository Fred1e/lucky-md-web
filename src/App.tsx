import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Bot, QrCode, Smartphone } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Deployment from './components/Deployment';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QRCode from './components/auth/QRCode';
import PairCode from './components/auth/PairCode';

function Navigation() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center text-white">
            <Bot className="h-8 w-8 text-blue-500 mr-2" />
            <span className="font-bold text-xl">LUCKY-MD</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/qr"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
            >
              <QrCode className="h-4 w-4 mr-1" />
              QR Code
            </Link>
            <Link
              to="/pair"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
            >
              <Smartphone className="h-4 w-4 mr-1" />
              Code d'appairage
            </Link>
            <a
              href="https://github.com/Fred1e/LUCKY_MD"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
            <Hero />
            <Features />
            <Installation />
            <Deployment />
            <FAQ />
            <Footer />
          </div>
        } />
        <Route path="/qr" element={<QRCode />} />
        <Route path="/pair" element={<PairCode />} />
      </Routes>
    </Router>
  );
}

export default App;