import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../../dist/assets/blog.png" 
import user from "../../../dist/assets/user.jpg"
import DropDownMenu from '../CoustemMenu/DropDownMenu'
import Image from '../Image'
import './NavBars.css'
export default function NavBar({response,handleClickToOpen}) {
  const navigate=useNavigate()
  const[dropMenu,SetDropMenu]=useState(false)

  return (
    <nav className='navbar'>
        <section className='nav-sec1'>
           <ul className='navbar-wrap'>
             <div className='web-img-nav-wrap'>
               <button className='no-bg-btn'   onClick={(e)=>navigate('/')}> 
                <Image src={img} alt="website icon"  className='web-icon' name='home-logo-btn'/>
               </button>
             </div>

             <div className='nav-state'>
                <li>name of user </li>
                <li> {response}</li>
             </div>  
            </ul>
        </section>
        <section className='nav-sec2'>
            <ul className='navbar-wrap'>
                <button className='pub-btn' name='publiach' onClick={handleClickToOpen}>Publich</button>
                <div className='user-img-nav-wrap'>
                  <button className='no-bg-btn'  name='user-img-btn' onClick={(e)=> SetDropMenu((prev)=>!prev)}>
                   <Image src={user}  className='user-img' alt="user image" name='user-img-btn'/>
                  </button>
                </div>
                <section>
                  {dropMenu? <DropDownMenu SetDropMenu={SetDropMenu} top={true} />:null}
                </section>
               
            </ul> 
        </section>
           
            
        
    </nav>
  )
}
