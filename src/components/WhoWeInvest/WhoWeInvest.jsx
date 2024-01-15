import React from 'react';
import './WhoWeInvest.css';
import { whoWeInvest } from '@/src/utils/data';
import {motion} from 'framer-motion'; 
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const WhoWeInvest = () => {
  return (
    <div className='wwi-wrapper'>
        <div className='container'>
            <div className='wwi-container'>
                {/* Left Section */}
                <div className='wwi-left'>
                    <div className='head'>
                        <motion.span
                           initial="offscreen"
                           whileInView={'onscreen'}
                           variants={tagVariants}
                        className='tag'>Who we invest in</motion.span>

                        <motion.span
                           initial="offscreen"
                           whileInView={'onscreen'}
                           variants={titleVariants}
                        className='title'>
                            {" "}
                            Innovation business
                            <br/> with early reaction
                        </motion.span>
                    </div>

                    {/* Feature Section */}
                    <div className='wwi-features'>
                        {
                            whoWeInvest.map((feature, i) => (
                                <motion.div
                                initial="offscreen"
                                whileInView={'onscreen'}
                                variants={containerVariants((i * 0.05 + 1))}
                                className='wwi-feature' key={i}>
                                    <span className='des'>{feature.title}</span>
                                    <span className='text'>{feature.des}</span>
                                </motion.div>
                            ) )
                        }
                    </div>
                </div>

                {/* Right Section */}

                <div className='wwi-right'>
                    <motion.img
                       initial="offscreen"
                       whileInView={'onscreen'}
                       variants={containerVariants(0.5)}
                    src="persons.png" 
                    alt="persons" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeInvest