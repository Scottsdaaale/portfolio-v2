'use client';

import React from 'react';
import { Tooltip } from 'react-tooltip';

import woolieGif from '../../../assets/gifs/Woolie.gif';
import saturoGif from '../../../assets/gifs/Saturo.gif';
import liquidGif from '../../../assets/gifs/Liquid.gif';
import flatironGif from '../../../assets/gifs/Flatiron.gif';
import certificatePdf from '../../../assets/images/FlatironCertificate.pdf';

import Image from 'next/image';
import Link from 'next/link';

function Job({ position, company, duration, responsibilities, gif, link }) {
  return (
    <div className='flex flex-row px-5 mb-8'>
      <div className=''>
        <Image src={gif} alt='Job' className='max-w-[70px]' />
      </div>
      <div className='px-5 mb-0'>
        <h3>{position}</h3>
        <p className='mb-2'>
          <Link
            href={link}
            target='_blank'
            rel='noreferrer'
            className='hover:text-blue-500 transition  ease-in-out'
          >
            {company}
          </Link>
        </p>
        <p className='mb-2'>{duration}</p>
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const jobData = [
    {
      company: 'Woolie.tv →',
      position: 'Co-Founder/Lead Developer',
      duration: '10/2023-present',
      responsibilities: [
        'Pioneered the inception and development of a captivating relaxation platform from its conceptual stages to a fully realized, engaging experience.',
        'Drove engagement strategies leading to a substantial rise in platform adoption and retention rates through active cultivation and nurturing of the user base.',
        'Iteratively enhanced platform functionality and interface based on user feedback and analytics, ensuring a seamless experience for our expanding user community.',
      ],
      gif: woolieGif,
      link: 'https://www.woolie.tv',
      tooltipContent: 'Woolie.tv',
    },
    {
      company: 'Saturo Sounds →',
      position: 'WordPress Engineer',
      duration: 'Freelance | 07/2023 - 09/2023',
      responsibilities: [
        'Redesigned music label website, creating a modern and engaging design.',
        'Utilized Elementor Pro and custom coding for a dynamic and responsive user interface.',
        "Collaborated closely with the client's team to translate unique requirements into site features.",
        'Simplified site management for clients through intuitive interfaces and thorough documentation, ensuring smooth updates even post-departure.',
      ],
      gif: saturoGif,
      link: 'https://www.saturosounds.com',
      tooltipContent: 'Saturosounds.com',
    },
    {
      company: 'LiquidXYZ →',
      position: 'Junior Fullstack Developer',
      duration: 'Freelance | 7/2022 - 10/2022',
      responsibilities: [
        'Designed effective and user-friendly page layouts and navigation.',
        'Managed project priorities and timelines through clear communication.',
        'Implemented front-end code using JavaScript and Object-Oriented Programming.',
        'Utilized technologies like HTML, CSS, and XML for web development.',
      ],
      gif: liquidGif,
      link: 'https://www.linkedin.com/company/liquid-xyz/',
      tooltipContent: 'LiquidXYZ LinkedIn',
    },
    {
      company: 'Flatiron School →',
      position: 'Fullstack Engineer Apprentice',
      duration: '02/2022 - 06/2022',
      responsibilities: [
        'Developed web applications using various programming languages.',
        'Maintained up-to-date knowledge of technology trends and products.',
        'Ensured accuracy and functionality of websites.',
        'Validated code for security and cross-browser compatibility. Designed websites and large-scale web applications, documenting test plans and procedures.',
      ],
      gif: flatironGif,
      link: certificatePdf,
      tooltipContent: 'Flatiron Certificate',
    },
  ];

  return (
    <div className='px-3 mb-8'>
      <h2 className='mb-5'>Experience</h2>
      {jobData.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          position={job.position}
          duration={job.duration}
          responsibilities={job.responsibilities}
          gif={job.gif}
          link={job.link}
        />
      ))}
    </div>
  );
}

export default Experience;
