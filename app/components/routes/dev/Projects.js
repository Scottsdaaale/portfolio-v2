import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import genrescopeGif from '../../../assets/gifs/GenreScope.gif';
import myclipGif from '../../../assets/gifs/MyClip.gif';
import hypertyperGif from '../../../assets/gifs/HyperTyper.gif';
import woolieGif from '../../../assets/gifs/Woolie.gif';
import ytpGif from '../../../assets/gifs/YTP.gif';

import Tags from '../../common/Tags';

function Project({ title, description, gif, link, tags }) {
  return (
    <div className='flex flex-col px-5 mb-8'>
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        <h3 className='inline-block hover:text-blue-500 transition ease-in-out mb-2'>
          {title}
        </h3>
      </Link>
      <div className='flex flex-row'>
        <div>
          <p>{description}</p>
          <Tags tags={tags} />
        </div>
        <div className='flex items-center justify-center'>
          <Image src={gif} alt='Project' className='max-w-[70px]' />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projectInfo = [
    {
      title: 'YTP.com →',
      description:
        'Redesigned and built client brand new marketing site. Increased organic traffic by 120%, doubled WOW retention, and incresed page speeds by 800%.',
      gif: ytpGif,
      link: 'https://www.yourtrainingprovider.com/',
      tags: ['Nextjs', 'Tailwind', 'Flask', 'MySQL', 'AWS', 'Custom CMS'],
    },
    {
      title: 'Woolie.tv →',
      description:
        'Built using React with Bootstrap, Woolie is a build-your-own experience relaxation platform. Comfy cozy ambient videos and sounds.',
      gif: woolieGif,
      link: 'https://www.woolie.tv/',
      tags: ['React', 'Bootstrap'],
    },
    {
      title: 'GenreScope →',
      description:
        'Using React, Django, and the Spotify and Youtube APIS, GenreScope allows users to discover new music by searching through thousands of genres. Find artists, videos, songs, and playlists.',
      gif: genrescopeGif,
      link: 'https://github.com/Scottsdaaale/GenreScope',
      tags: ['React', 'Django', 'Bootstrap', 'Spotify API', 'Youtube API'],
    },
    {
      title: 'MyClip →',
      description:
        'A video game clip social media site. Features login, comment, and star rating systems.',
      gif: myclipGif,
      link: 'https://github.com/Scottsdaaale/MyClip',
      tags: ['React', 'CSS', 'Ruby', 'Rails', 'PostgreSQL'],
    },
    // {
    //   title: 'HyperTyper →',
    //   description:
    //     'A simple speed typing app made collaboratively during my time at Flatiron School.',
    //   gif: hypertyperGif,
    //   link: 'https://github.com/Scottsdaaale/HyperTyper',
    // },
  ];

  return (
    <div className='mb-10 '>
      <h2 className='mb-5'>Projects</h2>
      {projectInfo.map((info, index) => (
        <Project
          key={index}
          title={info.title}
          description={info.description}
          gif={info.gif}
          link={info.link}
          tags={info.tags}
        />
      ))}
    </div>
  );
}

export default Projects;
