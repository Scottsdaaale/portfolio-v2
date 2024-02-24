import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Intro from './Intro';
import Projects from './Projects';
import FadeInWrapper from '../../common/FadeInWrapper';

function Main() {
  return (
    <div className="container mx-auto max-w-[450px]">
      <Intro />
      <FadeInWrapper delay={5000}>
        <About />
      </FadeInWrapper>
      <FadeInWrapper delay={5200}>
        <Experience />
      </FadeInWrapper>
      <FadeInWrapper delay={5400}>
        <Projects />
      </FadeInWrapper>
      <FadeInWrapper delay={5600}>
        <Contact />
      </FadeInWrapper>
    </div>
  );
}

export default Main;