'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import computerGif from '../../assets/gifs/Computer.gif';
import bookGif from '../../assets/gifs/Book.gif';
import externalLinkGif from '../../assets/gifs/ExternalLink.gif';
import phoneGif from '../../assets/gifs/Phone.gif';

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

  const menuItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`sticky top-0 flex justify-end items-center p-4 mx-5 transition-opacity duration-500 ${
        scrolling ? 'opacity-50' : 'opacity-100'
      } z-[9999]`}
    >
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className='flex gap-3'>
          <Link href='/'>
            <motion.div
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={computerGif}
                alt='Portfolio Page'
                width='40'
                height='40'
                className=''
              />
            </motion.div>
          </Link>
          <Link href='/contact'>
            <motion.div
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={phoneGif}
                alt='Contact Page'
                width='40'
                height='40'
                className=''
              />
            </motion.div>
          </Link>
          <Link href='/blog'>
            <motion.div
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
            <motion.div
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
