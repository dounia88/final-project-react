import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Nav from './layouts/nav';
import About from './pages/about/about';
import Footer from './layouts/footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;    