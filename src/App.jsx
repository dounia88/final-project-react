import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Nav from './layouts/nav';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Shop from './pages/shop/shop';
import Sale from './pages/sale/sale';
import Features from './pages/features/features';
import Blog from './pages/blog/blog';
import Footer from './layouts/footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;    