'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Tooltip } from 'react-tooltip';

import computerGif from '../../assets/gifs/Computer.gif';
import bookGif from '../../assets/gifs/Book.gif';
import externalLinkGif from '../../assets/gifs/ExternalLink.gif';
import toolGif from '../../assets/gifs/Tool2.gif';
import FadeInWrapper from '../common/FadeInWrapper';

const Header = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the screen width is less than 768 pixels
      const isSmallScreen = window.innerWidth < 768;
      // Update opacity based on scroll position and screen width
      setOpacity(isSmallScreen && window.scrollY > 0 ? 0 : 1);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='sticky top-0 flex justify-end items-center p-4 mx-5' style={{ opacity, transition: 'opacity 0.5s ease' }}>
      <div className='flex gap-3'>
        <FadeInWrapper delay={5000}>
          <Link href='/'>
            <Image
              src={computerGif}
              alt='Portfolio Page'
              width='40'
              height='40'
              className=''
              data-tooltip-id='my-tooltip'
              data-tooltip-content='Portfolio'
            />
          </Link>
        </FadeInWrapper>
        <FadeInWrapper delay={5300}>
          <Link
            href='/sandbox'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Sandbox'
          >
            <Image
              src={toolGif}
              alt='Sandbox Page'
              width='40'
              height='40'
              className=''
            />
          </Link>
        </FadeInWrapper>
        <FadeInWrapper delay={5600}>
          <Link
            href='/blog'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='Blog'
            place='right'
          >
            <Image
              src={bookGif}
              alt='Blog Page'
              width='40'
              height='40'
              className=''
            />
          </Link>
        </FadeInWrapper>
        <FadeInWrapper delay={5900}>
          <Link
            href='https://linktr.ee/scottsdaaale'
            data-tooltip-id='my-tooltip'
            data-tooltip-content='LinkTree'
            place='bottom'
          >
            <Image
              src={externalLinkGif}
              alt='Link Tree'
              width='40'
              height='40'
              className=''
              
            />
          </Link>
        </FadeInWrapper>
        <Tooltip id='my-tooltip' place="bottom" />
      </div>
    </div>
  );
};

export default Header;
