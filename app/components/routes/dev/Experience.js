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
}) {
  return (
    <div className='flex flex-row px-5 mb-8'>
      <div className=''>
        <Image src={gif} alt='Job' className='max-w-[70px]' />
      </div>
      <div className='px-5'>
        <Link href={link} target='_blank' rel='noreferrer'>
          <h3 className='hover:text-blue-500 transition ease-in-out mb-2'>
            {company}
          </h3>
        </Link>
        <p className=''>
          {role}
          {presentRole}
        </p>
        <p className='mb-2'>{duration}</p>
        <ul>
          {presentRoleDescription &&
            presentRoleDescription.map((description, index) => (
              <li key={index} className='mb-1'>
                {description}
              </li>
            ))}
        </ul>
        <h1 className='mb-2 text-white'>{upArrow}</h1>
        <p>{pastRole}</p>
        <p className='mb-2'>{pastRoleDuration}</p>
        <ul>
          {responsibilities.map((responsibility, index) => (
            <li key={index} className='mb-1'>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  const jobData = [
    {
      company: 'LiquidXYZ →',
      presentRole: 'Lead Frontend Developer',
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
      company: 'Woolie.tv →',
      role: 'Co-Founder/Lead Developer',
      duration: "'23 - present",
      responsibilities: [
        'Led inception and development of a captivating relaxation platform.',
        'Drove engagement strategies, leading to substantial rise in adoption and retention rates.',
        'Enhanced platform functionality and interface based on user feedback and analytics.',
      ],
      gif: woolieGif,
      link: 'https://www.woolie.tv',
      tooltipContent: 'Woolie.tv',
    },
    {
      company: 'Saturo Sounds →',
      role: 'WordPress Engineer',
      duration: 'Freelance | 07/2023 - 09/2023',
      responsibilities: [
        'Redesigned music label website, creating a modern and engaging design.',
        'Utilized Elementor Pro and custom coding for a dynamic and responsive user interface.',
        'Simplified site management for clients through intuitive interfaces and thorough documentation, ensuring smooth updates even post-departure.',
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
        'Developed web applications using various programming languages.',
        'Maintained up-to-date knowledge of technology trends and products.',
        'Ensured accuracy and functionality of websites.',
      ],
      gif: flatironGif,
      link: certificatePdf,
      tooltipContent: 'Flatiron Certificate',
    },
  ];

  return (
    <div className='mb-10 px-3'>
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
        />
      ))}
    </div>
  );
}

export default Experience;
