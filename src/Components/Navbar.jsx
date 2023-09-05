import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar(){

  const [nav,setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
window.addEventListener('scroll',changeBackground);

  return(
  <nav class Name={nav ? "nav active ": "nav"}>
    <Link to='#'> SWEETCAKE</Link>
    <input className='menu-btn' type='checkbox' id='menu-btn'/>
    <label classNmae='menu-icon' for='menu-btn'>
      <span classNmae='nav-icon'></span>
    </label>
<ul className='menu'>
  <li><Link to='#'>Home</Link></li>
  <li><Link to='#'>Products</Link></li>
  <li><Link to='#'>About</Link></li>
  <li><Link to='#'>Contact</Link></li>
</ul>
  </nav>
  )
}

export default Navbar;