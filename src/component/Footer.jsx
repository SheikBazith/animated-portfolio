import React from 'react'

export default function () {
  return (
    <div className='bg-[#1f1f1f] p-6 flex flex-col gap-4'>
        <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl font-black text-white'>SHEIK BAZITH</h1>
        <p className='text-white'>Check my other works :</p>
        </div>
        
        <div className='flex justify-center gap-6'>
          <button onClick={() => window.open('https://www.behance.net/sheikbazith', '_blank')}><img className='h-[25px] hover:h-[30px] transition-all' src='/images/social-icon/behance-dark.png'/></button>
          <button onClick={() => window.open('https://github.com/SheikBazith', '_blank')}><img className='h-[25px] hover:h-[30px] transition-all' src='/images/social-icon/git-dark.png'/></button>
          <button onClick={() => window.open('https://www.linkedin.com/in/sheik-bazith-439415205/', '_blank')}><img className='h-[25px] hover:h-[30px] transition-all' src='/images/social-icon/linkedin-dark.png'/></button>
      </div>
    </div>
  )
}
