import React,{useState} from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import HomeNavBar from './Components/CoustemNav/HomeNavBar'
import FormDialog from './Components/Dialogs/FormDialog'
import { Grid,Typography ,Divider} from '@mui/material'
import Image from './Components/Image';
import blog from '../dist/assets/blog.png'
import { AiFillLinkedin ,AiOutlineInfoCircle,AiFillInstagram,AiFillFacebook} from "react-icons/ai";
export default function About() {
  const [dialog,setDialog]=useState(false)
  const [form,setForm]=useState('')
 
  const handleClickToOpen=(e)=>{
    setForm(e)
    setDialog(true)
  }
 const handleToClose=()=>{
  setDialog(false)
 }
  return (
    <div>
      <HomeNavBar handleClickToOpen={handleClickToOpen}/>
      <FormDialog dialog={dialog} 
        handleToClose={handleToClose}
        form={form} setForm={setForm} 
      />
        <Grid container  width="100%"  direction={"column"}  >
        <Typography align='left'   variant='h1'   margin={"10%"} >
         <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.8em',
            }}
            startDelay={100}
            cursorColor="#3F3D56"
            multiText={[
              'Hey There,',
              'Welcome To Blog...',
              'We Hope To Join Us,',
              'If You Are Interested In Us,',
              'Just Scroll Down A Bit.',
            ]}
            multiTextDelay={1000}
            typeSpeed={80}
          />
        </Typography>
         {/* <Divider/> */}
        <Grid container direction={"row"} justifyContent="space-around" bgcolor={"ButtonFace"} marginTop={"20%"}   width={"100%"}   >
          <Typography width={"20%"}  >
            <Image src={blog} />
          </Typography>
          <Typography variant="h6" marginTop={"5%"} >
            <Typography variant='h4' >Back Storie </Typography>
            Hi There, I'm Firas, I'm Develper,
            <br />
            And Also I'm The Founder Of This Website,
            <br />
            I Created This Project For Gain Only Knowledge Purpose,
            <br />
            If Want More <AiOutlineInfoCircle /> Here Is My Contact 
            <br />
            <a  style={{textDecoration: 'none'}} target="_blank" href="https://www.linkedin.com/in/firas-jedidi-827328232/"><AiFillLinkedin/> </a>
            <a  style={{textDecoration: 'none'}} target="_blank" href="https://www.instagram.com/fj16th/"> <AiFillInstagram/></a>
            <a  style={{textDecoration: 'none'}} target="_blank" href="https://www.facebook.com/FJ16TH"><AiFillFacebook/></a>
            
          </Typography>

        </Grid>
      </Grid>
          
    </div>
  )
}
