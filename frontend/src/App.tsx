import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

const Welcome: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="App-link"
        href="/home"
        style={{ marginTop: '20px' }}
      >
        Enter Hadeer's Candle
      </a>
    </header>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/wax/:waxType" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;