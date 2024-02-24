import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import genrescopeGif from '../../../assets/gifs/GenreScope.gif';
import myclipGif from '../../../assets/gifs/MyClip.gif';
import hypertyperGif from '../../../assets/gifs/HyperTyper.gif';

function Project({ title, description, gif, githubLink }) {
  return (
    <div className='flex flex-row mb-3'>
      <div className='px-5'>
        <h3 className='mb-2'>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <Link href={githubLink} target='_blank' rel='noopener noreferrer'>
          <Image src={gif} alt='Project' className='max-w-[70px]'/>
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  const projectInfo = [
    {
      title: 'GenreScope',
      description:
        'Allows users to discover new music by searching through thousands of genres. Find artists, videos, songs, and playlists.',
      gif: genrescopeGif,
      githubLink: 'https://github.com/Scottsdaaale/GenreScope',
    },
    {
      title: 'MyClip',
      description:
        'A video game clip social media site. Features login, comment, and star rating systems.',
      gif: myclipGif,
      githubLink: 'https://github.com/Scottsdaaale/MyClip',
    },
    {
      title: 'HyperTyper',
      description:
        'A simple speed typing app made collaboratively during my time at Flatiron School.',
      gif: hypertyperGif,
      githubLink: 'https://github.com/Scottsdaaale/HyperTyper',
    },
  ];

  return (
    <div className='mb-10 px-3'>
      <h2 className='mb-5'>Projects</h2>
      {projectInfo.map((info, index) => (
        <Project
          key={index}
          title={info.title}
          description={info.description}
          gif={info.gif}
          githubLink={info.githubLink}
        />
      ))}
    </div>
  );
}

export default Projects;
