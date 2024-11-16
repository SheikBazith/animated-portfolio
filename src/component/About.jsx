import React from 'react'
import { motion } from 'framer-motion';
import { form } from 'framer-motion/client';

export default function About() {
  const aboutMe = 'My name is Sheik Bazith, and I am a UI/UX designer and Front End Developer that specializes in creating intuitive and visually appealing digital experiences. With a love for user-centered design and competence in Figma and ReactJS, I turn ideas into practical and visually appealing interfaces. Let us work together and influence the future of design together.'
  
  return (
    
    <div className='flex h-[70vh] bg-[#1f1f1f] mb-14 mt-14 text-white'>
    <div className='about flex flex-col gap-4 text-center justify-center items-center'>
    <h1 className='about-text font-black text-4xl'>About Me</h1>
      <p className='w-[100%] md:w-[80%] about-text text-center'>{aboutMe}</p>
    </div>
    </div>
  )
}
