import React from 'react';
import logoImage from '../../../assets/gifs/Me.gif';
import FadeInWrapper from '../../common/FadeInWrapper';
import Image from 'next/image';

function Intro() {
  return (
    <div className='mb-14'>
      <div className='flex flex-row items-center justify-center'>
        <div className=''>
          <FadeInWrapper delay={0}>
            <Image src={logoImage} alt='Logo' className='rounded-full max-w-[100px]' />
          </FadeInWrapper>
        </div>
        <div className='px-3 flex flex-col'>
          <FadeInWrapper delay={1800}>
            <h1 className='font-semibold'>
              Hello, my name is Scotty&nbsp;Peterson...
            </h1>
            <h1 className='mb-2'></h1>
          </FadeInWrapper>
          <FadeInWrapper delay={3000}>
            <p className=''>
              Developer, Musician, Plant and&nbsp;Cat&nbsp;Dad
            </p>
          </FadeInWrapper>
        </div>
      </div>
    </div>
  );
}

export default Intro;
