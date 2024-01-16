import React from 'react'
import './Testimonials.css';
import SlickSlider from './SlickSlider';

const Testimonials = () => {
  return (
    <div className='t-wrapper'>
        <div className='container'>
            <div className='t-container'>
                <div className='t-head'>
                    <span className='tag'>Testimonials</span>
                    <span className='title'>Access Investment that complements Traditional Funding Options</span>
                    <span className='des'> What customers say about</span>
                </div>
            </div>

            {/* Slider Section */}
            <SlickSlider/>
            </div>
            </div>
  )
}

export default Testimonials