import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../../dist/assets/blog.png" 
import Image from '../Image'
// import './NavBars.css'
export default function HomeNavBar({handleClickToOpen}) {
  const navigate=useNavigate()
  return (
    <nav className='h-nav'>
        <ul className='h-nav-list'>
          <div className='h-nav-se1'onClick={()=>navigate('/')}>
            <div className='h-web-icon-wrap' >
              <Image className="web-icon"  src={img}/>
            </div>
            <li className='web-title'>Blog...</li>
          </div>
          <div className='h-nav-se2'>
            <button className='no-bg-btn hide' onClick={()=>navigate('/About')}>
                <li >About</li>
             </button>
              <button className='no-bg-btn hide' onClick={()=>handleClickToOpen('signin')} >
                <li>Sign In</li>  
              </button>
              <button className='bg-btn' onClick={handleClickToOpen}>
                <li> Get Started</li>
              </button>
          </div>
        </ul>
    </nav>
  )
}
