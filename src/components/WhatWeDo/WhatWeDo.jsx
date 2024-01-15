import React from 'react';
import './WhatWeDo.css';
import { features } from '@/src/utils/data';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className='wwd-wrapper'>
        <div className='container'>
            <div className='wwd-container'> 
            {/* Head of the section */}
                <div className='wwd-head'>  
                    <span className='tag'>What We Do</span>
                    <span className='title'>{" "}We enable constant enterprise transformation at speed and scale</span>
                    <span className='des'>Immediate and 100% Guaranteed</span>
                </div>

                {/* Below Two Section Blocks */}
                <div className='wwd-blocks'>
                    {/* First Block */}
                    <div className='wwd-block'>
                        <span className='sec-title'>Revenue</span>
                        <span className='text'>Web & Digital Marketing</span>    

                        <div className='block-features'>
                            {
                               features.slice(0,3).map((feature, i ) => (
                                <div className='block-feature' key={i}>
                                    <Image
                                    src={feature.icon}
                                    alt='feature'
                                    width={60}
                                    height={60}
                                    />
                                    <span>{feature.title}</span>
                                </div>
                               ))
                            
                            }
                        </div>
                    </div>

                    {/* Second Block */}
                    <div className='wwd-block'>
                        <span className='sec-title'>Repayment</span>
                        <span className='text'>We create and manage your google and digital marketing</span>    

                        <div className='block-features'>
                            {
                               features.slice(3,6).map((feature, i ) => (
                                <div className='block-feature' key={i}>
                                    <Image
                                    src={feature.icon}
                                    alt='feature'
                                    width={60}
                                    height={60}
                                    />
                                    <span>{feature.title}</span>
                                </div>
                               ))
                            
                            }
                        </div>
                    </div>

                    {/* Support Block */}

                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo