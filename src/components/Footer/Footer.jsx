import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className='container'>
            <div className='f-container'>
                <span className='title'>Join DevTree Today !</span>
                <EmailBox />

                <hr/>
                <div className='f-menu'>
                <Link to="h-wrapper" spy={true} smooth={true}>
                <span>Home</span>
              </Link>
                    <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
                </div>

                <hr/>

                <span className='copy'>Made with love by <a href='https://www.linkedin.com/in/sumairq/'>Sumair Qaisar</a></span>
            </div>
        </div>
    </div>
  )
}

export default Footer