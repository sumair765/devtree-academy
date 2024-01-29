"use client"
import React from 'react';
import './WhatWeDo.css';
import { features } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, desVariants, containerVariants } from '@/src/utils/animation';

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* Head of the section */}
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={tagVariants}
              className="tag"
            >
              Why Join DevTree Academy
            </motion.span>

            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="title"
            >
              {' '}
              We prepare software engineering students for the international job market.
            </motion.span>

            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={desVariants}
              className="des"
            >
              We boast a 90% job placement rate
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="title"
              style={{marginTop: '2rem'}}
            >
              {' '}
              Onboarding
            </motion.span>
          
          </div>

          {/* Below Two Section Blocks */}
          <div className="wwd-blocks">
            {/* First Block */}
            <div className="wwd-block">
              <motion.span 
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="sec-title">Admissions Process
              </motion.span>
              <motion.span
               initial="offscreen"
               whileInView={'onscreen'}
               variants={desVariants}
              className="text">We only pick top 5% of applicants</motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                  initial="offscreen"
                  whileInView={'onscreen'}
                  variants={containerVariants((i+1 * 0.1))}
                  className="block-feature" key={i}>
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    /> 
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second Block */}
            <div className="wwd-block">
              <motion.span 
               initial="offscreen"
               whileInView={'onscreen'}
               variants={titleVariants}
              className="sec-title">Pairing Process</motion.span>
              
              <motion.span
               initial="offscreen"
               whileInView={'onscreen'}
               variants={desVariants}
              className="text">
                After admission you will be paired with a cohort based on
              </motion.span>

              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                  initial="offscreen"
                  whileInView={'onscreen'}
                  variants={containerVariants((i+1 * 0.1))}
                  className="block-feature" key={i}>
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Support Block */}
          <div className='support'>

         
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
          className="wwd-support">
            {/* Left Side */}
            <div className='wwd-text-left'>
              <span className="sec-title">Full-Stack</span>
            </div>

            {/* Right Side */}
            <div className='wwd-text-right'>
              <span className="text">Join our most prestigious Full-Stack Programe.</span>
              <span className="text">
              Code the Complete Experience: Full-Stack Mastery for Seamless Digital Innovation.
              </span>
            </div>
  
            <div className='wwd-image fs-image'>
                      </div>
          </motion.div>
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
          className="wwd-support">
            {/* Left Side */}
            <div className='wwd-text-left'>
              <span className="sec-title">Frontend</span>
            </div>

            {/* Right Side */}
            <div className='wwd-text-right'>
              <span className="text">Join our best in class Frontend programe.</span>
              <span className="text">
              Elevate User Experiences: Craft Aesthetically Brilliant Frontends with Expert Guidance.
              </span>
            </div>
  
            <div className='wwd-image fe-image'>
                      </div>
          </motion.div>

          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
          className="wwd-support">
            {/* Left Side */}
            <div className='wwd-text-left'>
              <span className="sec-title">Backend</span>
              {/* <span className="des">
                Digital transformation and stack expertise.
              </span> */}
            </div>

            {/* Right Side */}
            <div className='wwd-text-right'>
              <span className="text">Join our most comprehensive Backend programe.</span>
              <span className="text">
              Unleash the Power Behind the Interface: Master Backend Development.
              </span>
            </div>
  
            <div className='wwd-image be-image'>
                      </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
