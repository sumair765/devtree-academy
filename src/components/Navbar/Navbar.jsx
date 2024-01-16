'use client'
import React,{useState} from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';

const Navbar = () => {

    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
  return (
    <div className="n-wrapper sticky">
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left section */}
          <div className="n-logo">
            <span>Product</span>
          </div>
          {/* Left section */}
          <div className="n-right">
            <div className="n-menu">
              <span>What we do</span>
              <span>How it works</span>
              <span>Who we invest in</span>
              <span>Testimonials</span>
            </div>
            <div className="fund-button">Get Fund</div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="nm-container">
        {/* Logo */}

        <span>SPRODUCT</span>

        {/* Menu Icons */}
    {
        !mobileMenuOpened ?(
        <BiMenuAltRight 
        size={30}
        onClick={()=>setMobileMenuOpened(true)}
        />) :
        (<RxCross2 size={30} onClick={()=> setMobileMenuOpened(false)} />)
    }
        {/* Mobile Menu */}
        <div className="nm-menu"
        style={{transform: mobileMenuOpened && "translateX(0%)"}}>
          <span>What we do</span>
          <span>How it works</span>
          <span>Who we invest in</span>
          <span>Testimonials</span>
          <div className="m-funded-button">Get Fund</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
