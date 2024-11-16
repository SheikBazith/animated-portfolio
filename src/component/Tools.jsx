import React from 'react'

export default function Tools() {
  return (
    <div className='tools flex flex-col lg:flex-row'>
         <div className='slider'>
        <div className='list'>
            <div className='item' style={{'--position': 1}}>
                <img src='/images/skills/react.png'/>
            </div>
            <div className='item' style={{'--position': 2}}>
                <img src='/images/skills/html5.jpg'/>
            </div>
            <div className='item' style={{'--position': 3}}>
                <img src='/images/skills/css.png'/>
            </div>
            <div className='item' style={{'--position': 4}}>
                <img src='/images/skills/js.png'/>
            </div>
            <div className='item' style={{'--position': 5}}>
                <img src='/images/skills/framer.png'/>
            </div>
            <div className='item' style={{'--position': 6}}>
                <img src='/images/skills/postgres.png'/>
            </div>
            <div className='item' style={{'--position': 7}}>
                <img src='/images/skills/figma.png'/>
            </div>
            <div className='item' style={{'--position': 8}}>
                <img src='/images/skills/photoshop.png'/>
            </div>
            <div className='item' style={{'--position': 9}}>
                <img src='/images/skills/tailwind.png'/>
            </div>
        </div>
        </div>
    </div>
   
    
  )
}
