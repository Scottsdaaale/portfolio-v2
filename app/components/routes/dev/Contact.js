import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import contactGif from '../../../assets/gifs/Contact.gif';

const contactInfo = [
  {
    label: 'Email',
    value: (
      <Link href='mailto:ScottPetersonSE@gmail.com'>
        ScottPetersonSE@gmail.com
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
      <p> {label}: </p>
      <p className='text-blue-500 hover:underline'> {value} </p>
    </div>
  );
}

function Contact() {
  return (
    <div className='px-3 mb-8'>
      <h2>Contact</h2>
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
