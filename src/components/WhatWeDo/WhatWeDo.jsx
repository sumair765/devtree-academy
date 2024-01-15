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
              What We Do
            </motion.span>

            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
              className="title"
            >
              {' '}
              We enable constant enterprise transformation at speed and scale
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={desVariants}
              className="des"
            >
              Immediate and 100% Guaranteed
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
              className="sec-title">Revenue</motion.span>
              <motion.span
               initial="offscreen"
               whileInView={'onscreen'}
               variants={desVariants}
              className="text">Web & Digital Marketing</motion.span>

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
              className="sec-title">Repayment</motion.span>
              
              <motion.span
               initial="offscreen"
               whileInView={'onscreen'}
               variants={desVariants}
              className="text">
                We create and manage your google and digital marketing
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
          <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={containerVariants(0.3)}
          className="wwd-support">
            {/* Left Side */}
            <div>
              <span className="sec-title">Marketing Growth</span>
              <span className="des">
                Digital transformation and stack expertise to super power growth
              </span>
            </div>

            {/* Right Side */}
            <div>
              <span className="text">We are a certified Google Partner:</span>
              <span className="text">
                We are a certified Google Partner: proven and winning
                strategies, 100% guaranteed results, Improvement of existing
                campaingns, Advertising optimization of text and image ads,
                Guaranteed return on investment (ROI)
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
