import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Products />
        <About />
    </div>
  );
}

export default App;