import React from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-[89vh]'>
    <motion.div
    animate={{
        rotate: [0, 360],
    }}
    transition={{
        duration: 6,
        repeat: Infinity,
    }}>

    <img className='w-[200px]' src='/images/'/>
   </motion.div>
   </div>
  )
}
