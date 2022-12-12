import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../../dist/assets/blog.png" 
import writing from "../../../dist/assets/editing.png" 
import storis from "../../../dist/assets/text.png" 
import bstoris from "../../../dist/assets/btext.png" 
import user from "../../../dist/assets/user.jpg"
import home from "../../../dist/assets/home.png"
import backhome from "../../../dist/assets/b-home.png"
import bookmark from "../../../dist/assets/bookmark.png"
import backbookmark from "../../../dist/assets/bbookmark.png"
import Image from '../Image'
import DropDownMenu from '../CoustemMenu/DropDownMenu'
import {Typography } from '@mui/material'
// import './NavBars.css'
export default function HomeSideNavBar() {
  const navigate=useNavigate();
  const [Home,SetHome]=useState(true);
  const [Bookmark,Setbookmark]=useState(false);
  const [file,Setfile]=useState(false);
  const [dropMenu,SetDropMenu]=useState(false)
  
  const handleClick=(e)=>{
    const {name}=e.target
   if(name==='home'){SetHome(true);Setfile(false);Setbookmark(false);navigate('/');
   }if(name==='bookmarkes'){Setbookmark(true);Setfile(false);SetHome(false);navigate('/Saved');
   }
   if(name==='file'){Setfile(true);Setbookmark(false);SetHome(false); navigate('/Stories');}
  }
  return (
    <nav className='side'>
        <ul className='side-nav'>
            <div className='web-icon-side-nav-wrap'>
              <Image className="web-icon" src={img} onClick={()=>{navigate('/')}}/>
            </div>
            <div className='icon-side-nav-wrap' >
              <div   onClick={(e)=>{handleClick(e)}}    >
              {
                  Home
                ?
                  <Image src={backhome}  className='icon-side-nav' name='home'  />
                :
                  <Image src={home} className='icon-side-nav'name='home' />
              }
              </div>
              <div onClick={(e)=>{handleClick(e)}}>
              {
                  Bookmark
                ?
                  <Image src={backbookmark} className='icon-side-nav' name='bookmarkes' />
                :
                  <Image src={bookmark} className='icon-side-nav' name='bookmarkes' />
              }
              </div>

              <div onClick={(e)=>{handleClick(e)}}>
                {file
                ?
                <Image className='icon-side-nav' src={bstoris} name="file" />
                :
                <Image className='icon-side-nav' src={storis} name="file" />
                }
              </div>
              <hr />
              <div onClick={()=>{navigate('/Write')}}>
                <Image className='icon-side-nav' src={writing}  />
              </div>
              
            </div>
           
            <div className='user-img-side-nav-wrap'>
              <Image src={user} className='user-img' alt="user image" onClick={()=>{SetDropMenu((prev)=>!prev)}} />
                <Typography bgcolor={"ButtonFace"} >
                  {dropMenu? <DropDownMenu SetDropMenu={SetDropMenu} top={false} />:null}
                </Typography>
            </div>
        </ul>
    </nav>
  )
}
