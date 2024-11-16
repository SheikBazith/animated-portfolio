import React from 'react'

export default function Skills() {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center gap-8'>
    <h1 className='about-text font-black text-4xl'>Skills</h1>
    <p className='about-text w-[80%] sm:w-[70%] text-center'>Discover my extensive design abilities, which range from user interface and experience to prototyping and testing. Let's work together to create great digital experiences.</p>
    <div className='flex flex-col md:flex-row gap-6 flex-wrap justify-center items-center'>
       <div class="card card1">
          <div class="first-content">
            <span className='font-black text-xl'>Responsive Design</span>
          </div>
          <div class="second-content">
        <p className='skill-p text-center text-white'>Creating responsive, adjustable websites that offer a consistent user experience.</p>
          </div>
        </div>

        <div class="card card2">
          <div class="first-content">
            <span className='font-black text-xl'>UI/UX Design</span>
          </div>
          <div class="second-content">
        <p className='skill-p text-center text-white'>Creating streamlined, user-friendly designs to raise satisfaction and engagement.</p>
          </div>
        </div>

        <div class="card card3">
          <div class="first-content">
            <span className='font-black text-xl'>Graphic Design</span>
          </div>
          <div class="second-content">
        <p className='skill-p text-center text-white'>Creating artwork and logos for goods to provide unique and interesting customer experience.</p>
          </div>
        </div>
        </div>
    </div>
   
  )
}
