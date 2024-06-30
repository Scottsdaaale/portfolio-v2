import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import me from '../../assets/gifs/Me.gif';

const CTA = () => {
  const formVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className='bg-[#070707] py-8 mb-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-3'>
          <div className='order-2 sm:order-1 text-center sm:text-left mb-8 sm:mb-0'>
            <h2 className='text-white text-3xl font-bold mb-4'>
              Need Web Services?
            </h2>
            <p className='text-gray-300 mt-4'>
              If you or someone you know is looking for professional web
              services, I'm here to help.
            </p>
            <div className='mt-8'>
              <Link href='/contact'>
                <motion.button
                  type='button'
                  className='bg-blue-500 text-white px-5 py-3 rounded-md font-medium w-full sm:w-auto'
                  variants={formVariants}
                  initial='hidden'
                  animate='visible'
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: '#1E40AF',
                    transition: { duration: 0.3 },
                  }}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </div>
          <div className='order-1 sm:order-2 flex-shrink-0'>
            <div className='relative w-48 h-48 overflow-hidden rounded-full'>
              <Image
                src={me}
                alt='Web Services'
                layout='fill'
                objectFit='cover'
                className='rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
