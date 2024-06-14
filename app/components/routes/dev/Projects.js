import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import genrescopeGif from '../../../assets/gifs/GenreScope.gif';
import myclipGif from '../../../assets/gifs/MyClip.gif';
import hypertyperGif from '../../../assets/gifs/HyperTyper.gif';
import woolieGif from '../../../assets/gifs/Woolie.gif';
import ytpGif from '../../../assets/gifs/YTP.gif';


function Project({ title, description, gif, link }) {
  return (
    <div className='flex flex-row mb-3 items-center'>
      <div className='px-5'>
        <Link href={link} target='_blank' rel='noopener noreferrer'>
          <h3 className='inline-block hover:text-blue-500 transition ease-in-out mb-2'>
            {title}
          </h3>
        </Link>
        <p>{description}</p>
      </div>
      <div>
        <Image src={gif} alt='Project' className='max-w-[70px]' />
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
    },
    {
      title: 'Woolie.tv →',
      description:
        'Build your own experience relaxation platform. Comfy cozy ambient videos and sounds. Build your perfect scene and chill all day long at woolie.tv.',
      gif: woolieGif,
      link: 'https://www.woolie.tv/',
    },
    {
      title: 'GenreScope →',
      description:
        'Allows users to discover new music by searching through thousands of genres. Find artists, videos, songs, and playlists.',
      gif: genrescopeGif,
      link: 'https://github.com/Scottsdaaale/GenreScope',
    },
    {
      title: 'MyClip →',
      description:
        'A video game clip social media site. Features login, comment, and star rating systems.',
      gif: myclipGif,
      link: 'https://github.com/Scottsdaaale/MyClip',
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
        />
      ))}
    </div>
  );
}

export default Projects;
