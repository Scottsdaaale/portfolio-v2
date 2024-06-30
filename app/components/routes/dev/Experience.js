'use client';

import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import woolieGif from '../../../assets/gifs/Woolie.gif';
import saturoGif from '../../../assets/gifs/Saturo.gif';
import liquidGif from '../../../assets/gifs/Liquid.gif';
import flatironGif from '../../../assets/gifs/Flatiron.gif';
import fsaFreshGif from '../../../assets/gifs/FsaFresh.gif'
import certificateImage from '../../../assets/images/FlatironCertificate-1.png';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

function Job({
  role,
  company,
  duration,
  presentRole,
  presentRoleDescription,
  upArrow,
  pastRole,
  pastRoleDuration,
  responsibilities,
  gif,
  link,
  isCertificate,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e) => {
    if (isCertificate) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  return (
    <div className='flex flex-row px-5 mb-8'>
      <div className=''>
        <Image src={gif} alt='Job' className='max-w-[70px]' />
      </div>
      <div className='pl-5 sm:px-5'>
        {isCertificate ? (
          <div
            className='inline-block hover:text-blue-500 transition ease-in-out mb-2 cursor-pointer'
            onClick={handleClick}
          >
            {company}
          </div>
        ) : (
          <Link href={link} target='_blank' rel='noreferrer'>
            <h3 className='inline-block hover:text-blue-500 transition ease-in-out mb-2'>
              {company}
            </h3>
          </Link>
        )}
        <p className=''>
          {role}
          {presentRole}
        </p>
        <p className='mb-2'>{duration}</p>
        <ul>
          {presentRoleDescription &&
            presentRoleDescription.map((description, index) => (
              <li key={index} className=''>
                {description}
              </li>
            ))}
        </ul>
        <div className='mb-2 text-white'>{upArrow}</div>
        <p>{pastRole}</p>
        <p className='mb-2'>{pastRoleDuration}</p>
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className=''>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            className='fixed inset-0 z-50 flex items-center justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='relative bg-white rounded-lg shadow-lg p-8 max-w-4xl'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <button
                onClick={() => setShowPopup(false)}
                className='absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
              <Image
                src={certificateImage}
                alt='Certificate'
                className='max-w-full h-auto'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Experience() {
  const jobData = [
    {
      company: 'FSA Fresh →',
      role: 'Full Stack Developer',
      duration: "'24-present",
      gif: fsaFreshGif,
      link: 'https://www.fsafresh.com/',
      responsibilities: [
        'Implemented comprehensive code reviews and debugging processes, resulting in a reduction in production issues',
        'Optimized front-end assets using Webpack and lazy loading, reducing page load times by 25%',
        'Collaborated with cross-functional teams to develop intuitive UIs using React and Tailwind',
        'Leveraged Next.js for server-side rendering and structured data markup, boosting SEO performance by 70%',
      ],
    },

    {
      company: 'LiquidXYZ →',
      presentRole: 'Full Stack Developer',
      duration: "'23 - present",
      presentRoleDescription: [
        'Led development of visually stunning websites, ensuring exceptional user experiences.',
        'Made measurable impacts on client sites, increasing views and engagement.',
        'Championed strategic tech decisions, optimizing performance and scalability.',
      ],
      upArrow: '↑',
      pastRole: 'Freelance Jr Developer',
      pastRoleDuration: "'22 - '23",
      responsibilities: [
        'Delivered bespoke solutions, crafting tailored pages and components.',
        'Acquired real-world experience and honed essential skills.',
        'Contributed to team efforts, fostering a collaborative environment.',
      ],

      gif: liquidGif,
      link: 'https://www.linkedin.com/company/liquid-xyz/',
      tooltipContent: 'LiquidXYZ LinkedIn',
    },

    {
      company: 'Saturo Sounds →',
      role: 'WordPress Engineer',
      duration: 'Freelance | 07/2023 - 09/2023',
      responsibilities: [
        'Redesigned music label website using Elementor Pro and custom PHP, resulting in a 50% increase in page views',
        'Implemented lazy loading and CDN integration, improving site load times by 40%',
        'Created custom WordPress plugins for music playback and event management, enhancing user experience',
      ],
      gif: saturoGif,
      link: 'https://www.saturosounds.com',
      tooltipContent: 'Saturosounds.com',
    },

    {
      company: 'Flatiron School →',
      role: 'Fullstack Engineer Apprentice',
      duration: '02/2022 - 06/2022',
      responsibilities: [
        'Studied full-stack development technologies including CSS, HTML, JavaScript, React, Ruby, Rails, and PostgreSQL',
        'Developed progressive web applications throughout the course, applying newly acquired skills to create increasingly complex projects',
        'Excelled in algorithm and data structure challenges, demonstrating problem-solving skills and providing peer support',
        'Collaborated with other students to deliver comprehensive group projects, enhancing communication and teamwork abilities',
      ],
      gif: flatironGif,
      link: certificateImage,
      tooltipContent: 'Flatiron Certificate',
      isCertificate: true,
    },
  ];

  return (
    <div className='mb-10 '>
      <h2 className='mb-5'>Experience</h2>
      {jobData.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          role={job.role}
          presentRole={job.presentRole}
          presentRoleDescription={job.presentRoleDescription}
          duration={job.duration}
          upArrow={job.upArrow}
          pastRole={job.pastRole}
          pastRoleDuration={job.pastRoleDuration}
          responsibilities={job.responsibilities}
          gif={job.gif}
          link={job.link}
          isCertificate={job.isCertificate}
        />
      ))}
    </div>
  );
}

export default Experience;
