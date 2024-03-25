'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import computerGif from '../../assets/gifs/Computer.gif';
import bookGif from '../../assets/gifs/Book.gif';
import externalLinkGif from '../../assets/gifs/ExternalLink.gif';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 flex justify-end items-center p-4 mx-5 transition-opacity duration-500 ${
        scrolling ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.01, duration: 0.5 }}
      >
        <div className='flex gap-3'>
          <Link href='/'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Image
                src={computerGif}
                alt='Portfolio Page'
                width='40'
                height='40'
                className=''
              />
            </motion.div>
          </Link>
          <Link href='/blog'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Image
                src={bookGif}
                alt='Blog Page'
                width='40'
                height='40'
                className=''
              />
            </motion.div>
          </Link>
          <Link href='https://linktr.ee/scottsdaaale' target='blank'>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Image
                src={externalLinkGif}
                alt='Link Tree'
                width='40'
                height='40'
                className=''
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
