'use client';
import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Intro from './Intro';
import Projects from './Projects';
import { motion } from 'framer-motion';

function Main() {
  return (
    <div className='px-2 mx-auto max-w-[500px]'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.01, duration: 0.5 }}
      >
        <Intro />
        <About />
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </motion.div>
    </div>
  );
}

export default Main;