import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ProductList from './components/ProductList';


function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];
  
  const handleProductSelect = (id) => {
    setSelectedProducts(prevSelected => 
      prevSelected.includes(id)
        ? prevSelected.filter(productId => productId !== id)
        : [...prevSelected, id]
    );
  };

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  
  return (
    <div className="App">
      <Header />
      <Menu isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
      <Body />
      <ProductList products={products} onProductSelect={handleProductSelect} />
      <div>Selected Products: {selectedProducts.length}</div>
      <Footer />
    </div>
  );
}

export default App;
