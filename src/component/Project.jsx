import React from 'react'
import { motion } from 'framer-motion'

export default function Project(props) {

  
  return (
    <motion.div
     className='skill-animation project-container flex flex-col items-center justify-center w-[310px] mb-6 rounded-lg overflow-hidden'>
    <img className='rounded-lg' src={props.img}/>
    <div className='project-grid flex flex-col justify-center items-center p-6 gap-3 text-center absolute opacity-0 bg-black text-white w-[310px] h-[240px] rounded-lg cursor-pointer'>
      <h3>{props.name}</h3>
      <p className='text-sm'>{props.desc}</p>
      <button onClick={() => window.open(props.web, '_blank')} className='border-[1px] pt-1.5 pb-1.5 pl-2 pr-2 hover:bg-white hover:text-black'>Visit Link</button>
    </div>
</motion.div>
  )
}
