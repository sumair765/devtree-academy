'use client';

import React from 'react';
import './OurDiff.css';
import { OurDiffFeatures } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* Heading Section */}
          <div className="od-head">
            {/* <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={tagVariants}
              className="tag"
            >
              Concrete and Effective
            </motion.span> */}
            <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={titleVariants}
            className="title"
            style={{marginBottom: '3rem'}}>
             You'll have access to the best tools.{' '}
            </motion.span>
            {/* <motion.span
              initial="offscreen"
              whileInView={'onscreen'}
              variants={desVariants}
            className="text">
              Highly competive programe that provides you the best resources.
            </motion.span> */}
          </div>

          {/* feature */}
          <div className="od-features">
            {OurDiffFeatures.map((feature, i) => (
              <motion.div
              initial="offscreen"
              whileInView={'onscreen'}
              variants={containerVariants((i+1) * 0.1)}
              className="od-feature" key={i}>
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <span

                  className="sec-title"
                >
                  {feature.title}
                </span>
                <span
                  className="text"
                >
                  {feature.des}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
