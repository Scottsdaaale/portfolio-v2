'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/components/ui/use-toast';

import contactGif from '../../../assets/gifs/Contact.gif';

const contactInfo = [
  {
    label: 'Email',
    value: 'ScottPetersonSE@gmail.com',
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
  const { toast } = useToast()

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className='mb-3'>
      <p> {label}: </p>
      {typeof value === 'string' ? (
        <p
          onClick={() => {
            handleCopy(value);
            toast({
              title: 'Email copied to clipboard!',
              
            });
          }}
          className='text-white hover:text-blue-500 cursor-pointer'
        >
          {value} →
        </p>
      ) : (
        <p className='text-white hover:text-blue-500'>{value} →</p>
      )}
    </div>
  );
}

function Contact() {

  return (
    <div className='mb-10 '>
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
