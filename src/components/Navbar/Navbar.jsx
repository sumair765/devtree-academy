'use client';
import React, { useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { PiTreeFill } from "react-icons/pi";
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState('');
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.2) {
      setNavStyle('sticky');
    } else {
      setNavStyle('');
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* Left section */}
          <div className="n-logo">
            <span><PiTreeFill /> DevTree Academy</span>
          </div>
          {/* Left section */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Our Alumni</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-button">Join DevTree</div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="nm-container">
        {/* Logo */}

        <span><PiTreeFill /> DevTree Academy</span>

        {/* Menu Icons */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}
        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && 'translateX(0%)' }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>How it works</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy
            smooth
          >
            <span>Our Alumni</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>Testimonials</span>
          </Link>

          

          
          
          
          <div className="m-funded-button">Join DevTree</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
