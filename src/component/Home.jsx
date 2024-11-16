import React from 'react'
import { motion } from 'framer-motion'

export default function home() {
  const name = "Sheik-Bazith";
  const DURATION = 0.25;
  const STAGGER = 0.10;
  return (
    
    <div className='home flex flex-col items-center justify-center h-[60vh] text-black'>
        <motion.h1 id className='relative block overflow-hidden whitespace-nowrap
        text-5xl font-black uppercase md:text-8xl lg:text-9xl'
        initial="initial"
        whileHover="hovered"
        animate={{
          y:["-20%", 0]
        }}
        transition={{
          duration:1,
          ease:"easeIn"
        }}>
          <div>{name.split("").map((l,i) => {
            return <motion.span className='inline-block cursor-pointer'
            variants={{
              initial:{y:0},
              hovered:{y:"-100%"}
            }}
            transition={{
              duration:DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
           key={i}>{l}</motion.span>
          })}</div>
          <div className='absolute inset-0'>{name.split("").map((l,i) => {
            return <motion.span className='inline-block cursor-pointer'
            variants={{
              initial:{y:"100%"},
              hovered:{y:0,color:"#f95a43"}
            }}
            transition={{
              duration:DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
             key={i}>{l}</motion.span>
          })}</div>
        </motion.h1>

        <motion.p className='sub-head relative overflow-hidden text-center w-[100%] text-xl uppercase md:text-4xl lg:text-5xl'
        animate={{
          opacity: [0,1]
        }}
        
        transition={{
          duration:1,
          ease: "easeIn",
          delay:1
        }}
      >
        <div>
          <motion.p id='sub-head'
          animate={{
            y:[0,"-110%"]
          }}
          transition={{
            duration:1,
            delay:2
          }}>Developer</motion.p>
        </div>
        <div className='absolute inset-0'>
        <motion.p id='sub-head'
        animate={{
            y:["100%",0,0,0,"-110%"]
          }}
          transition={{
            duration:2,
            delay:3
          }}>Designer</motion.p></div>
          <div className='absolute inset-0'>
        <motion.p id='sub-head'
        animate={{
            y:["100%",0]
          }}
          transition={{
            duration:1,
            delay:5
          }}>Designer & Developer</motion.p></div>
      </motion.p>
      <button onClick={() => window.open('https://drive.google.com/file/d/1cJ54n3ptOOHdEBh7RakoxaLpi44hiqcS/view?usp=sharing', '_blank')} className='mt-8 px-8 py-2.5 xl:px-14 bg-black text-white border-2 border-white text-base lg:text-lg font-bold text-dark hover:bg-white hover:text-black transition-all ease-in-out'>Resume</button>

    </div>
  )
  
}
