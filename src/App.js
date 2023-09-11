import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Products />
        <About />
        <Contact />
    </div>
  );
}

export default App;