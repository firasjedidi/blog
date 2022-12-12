import React, {useState,useEffect} from 'react'
import HomeNavBar from './Components/CoustemNav/HomeNavBar'
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import FormDialog from './Components/Dialogs/FormDialog';
import {useParams, useNavigate} from 'react-router-dom'
import {
    Grid,
    Typography,
    Divider,
    Button,
    Icon
} from '@mui/material'
import axios from 'axios';
import SearchBar from './Components/CoustemNav/SearchBar';
import RenderingData from './Components/RenderingData';
import {data} from '../dt';
export default function Home({info,Token}) {
    const [dialog, setDialog] = useState(false)
    const [form, setForm] = useState('')
    const [color, setcolor] = useState(true)
   
    const handleClickToOpen = (e) => {
        setForm(e)
        setDialog(true)
    }
    const handleToClose = () => {
        setDialog(false)
    }
    const handleClick = (e) => {
   
     if(e==="Following"){
        setcolor(false)
        // var res=axios.get("")
     }else{
      setcolor(true)
       // var res=axios.get("")
     }
  }
  
  const handleClickTag = (e) => {
    navigate(`/Tag/${e}`)
}
useEffect(()=>{
    

    // const fetch=()=>{
    //     // let res = await axios.get(`http://localhost:5000/api/posts`)
    // }
    // fetch()
},[])


    if (!Token) {
        return (
            <Grid >

                <Typography>
                   <HomeNavBar handleClickToOpen={handleClickToOpen}/> {/* <HomeSideNavBar/> */}
                </Typography>
                <Grid  container direction={"column"} width="100%"  bgcolor={"ButtonFace"} >
                    <Typography variant='h1' align='left' marginTop={"10%"}marginLeft={"10%"}>
                        Stay curious.
                    </Typography>
                    <Typography align='left' variant='h5'  width="35%" marginTop={"2%"} marginLeft={"10%"}>
                        Discover Blogs, thinking, and expertise from writers on any topic.
                    </Typography>
                    <Typography align='left'margin={"2% 10%"}>
                <Button size='large'  style={{backgroundColor:" rgba(25, 25, 25, 1)",
                                borderRadius: "1.5rem",
                                marginTop: "-0.3rem",
                                color:" rgb(245, 243, 243)",
                                padding: "1rem",
                                fontSize: "0.9rem",
                                zIndex:0
                            }}
                    onClick={handleClickToOpen}>
                  Start exploring   
                </Button></Typography>
                </Grid>
                <FormDialog dialog={dialog} 
                    handleToClose={handleToClose} form={form} setForm={setForm} 
                />
             
                <Divider/>
                <Grid container direction={"row"} justifyContent="space-around">
                <Typography width={'50%'}
                    // marginLeft="-30%"
                    // bgcolor={"ButtonFace"}
                    // position="fixed"
                    // left={"5%"}
                    // overflow="scroll"
                    align="left"
                    p={"2%"}>
                    <RenderingData data={data} active={handleClickToOpen}  />
                </Typography>

                <Typography
                   style={{
                    position: "sticky",
                    width: "30%",
                    height: "20%",
                    top: "10%",
                    padding:"3%",
                    marginTop:"2%"
                   }}
                    
                    // bgcolor={"ButtonFace"}
                   >
                    <Typography>DISCOVER MORE OF WHAT MATTERS TO YOU</Typography>
                    <Button onClick={
                        (e) => handleClickToOpen()
                    }>Technology</Button>
                    <Button onClick={
                        (e) => handleClickToOpen()
                    }>Business</Button>
                    <Button onClick={
                        (e) => handleClickToOpen()
                    }>Psychology</Button>
                    <Button onClick={
                        (e) => handleClickToOpen()
                    }>Art</Button>

                </Typography>
                </Grid>
            </Grid>
        )
      
    } else 
         return (
            <Grid>
                <Typography>
                    <HomeSideNavBar/>
                </Typography>
                <Grid width={'50%'}
                    marginLeft={30}
                    p={5}>
                    <Grid container direction="row"
                        justifyContent={"flex-start"}
                        alignItems="center">
                        <Typography variant='h7'
                            onClick={(e)=>handleClick("Recommended")}
                            m={1}
                            style={color?{color:"#000000"}:{color:"GrayText"}}
                            >
                              Recommended
                             </Typography>
                        <Typography variant='h7'
                        onClick={(e)=>handleClick("Following")}
                        style={!color?{color:"#000000"}:{color:"GrayText"}}
                            m={1}>
                              Following
                             </Typography>

                    </Grid>
                    <Divider/>
                    <RenderingData data={data}/>
                </Grid>

                <Typography>
                    <SearchBar  more={true} tag={true}  />
                </Typography>
            </Grid>
            
        )

}
