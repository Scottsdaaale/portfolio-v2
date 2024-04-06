'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import contactGif from '../../../assets/gifs/Contact.gif';

const contactInfo = [
  {
    label: 'Send Me a Message',
    value: (
      <Link href='/contact'>
        Contact Form
      </Link>
    ),
  },
  {
    label: 'LinkedIn',
    value: (
      <Link
        href='https://www.linkedin.com/in/scotty-peterson/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Scotty Peterson
      </Link>
    ),
  },
];

function ContactItem({ label, value }) {

  return (
    <div className='mb-3'>
      <p> {label} </p>
      <h3 className='inline-block hover:text-blue-500 transition ease-in-out cursor-pointer'>{value} →</h3>
    </div>
  );
}

function Contact() {

  return (
    <div className='mb-10'>
      <h2 className='mb-5'>Reach Out</h2>
      <div className='flex flex-row px-5'>
        <div>
          <Image src={contactGif} alt='Contact' className='max-w-[70px]' />
        </div>
        <div className='px-5'>
          {contactInfo.map((info, index) => (
            <ContactItem key={index} label={info.label} value={info.value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
