import React from 'react';
// import useImageToggle from '../useImageToggle';
// import plantPng from '../../images/Plant.png';
import plantGif from '../../../assets/gifs/Plant.gif';
import Image from 'next/image';

function About() {
  return (
    <div className='flex flex-row items-center px-3 mb-8'>
      <div>
        <h2 className='mb-5'>About</h2>
        <div className='px-5'>
          <p>
            Creative web developer with 3 years of experience. Effective
            communicator and adept problem-solver. Spearheaded a startup from
            inception. Proficient in crafting innovative, user-friendly
            websites. Enthusiastic about designing visually captivating
            interfaces and optimizing user experiences. Eager to apply skills
            and expertise to drive success within a vibrant organization.
          </p>
        </div>
      </div>
      <div>
        <Image src={plantGif} alt='Plant' className='max-w-[70px]' />
      </div>
    </div>
  );
}

export default About;
