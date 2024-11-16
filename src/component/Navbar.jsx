import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-bar flex place-content-between'>
      <div>
      <h1 id='nav-logo'>SHEIK BAZITH</h1>
      </div>

      <div className='flex gap-2'>
          <button onClick={() => window.open('https://www.behance.net/sheikbazith', '_blank')}><img className='h-[25px] hover:h-[30px] transition-all' src='/images/social-icon/behance.png'/></button>
          <button onClick={() => window.open('https://github.com/SheikBazith', '_blank')}><img className='h-[25px] hover:h-[30px] transition-all' src='/images/social-icon/git.png'/></button>
          <button onClick={() => window.open('https://www.linkedin.com/in/sheik-bazith-439415205/', '_blank')}><img className='h-[25px] hover:h-[30px] transition-all' src='/images/social-icon/linkedin.png'/></button>
      </div>
    </div>
  )
}
