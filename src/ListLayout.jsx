import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import SearchBar from './Components/CoustemNav/SearchBar';
import RenderingData from './Components/RenderingData'
import {MdOutlineMoreHoriz} from 'react-icons/md'
import {Grid, Typography, IconButton, Divider} from '@mui/material'
import ListDropdown from './Components/CoustemMenu/ListDropDownMenu'
import Image from './Components/Image';
import Condinal from './Components/Condinal';
import axios from 'axios';
const ListLayout = ({info}) => {
    const {user,name}=useParams()
    const [data,setData]=useState([])
    const [open,setopen]=useState(false)
    useEffect(()=>{
      const fetch=async()=>{
        let res=await axios.get(`http://localhost:5000/api/lists/${name}`)
         if (res.data.code) {
          alert(res.data.code)
         } else {
           setData(res.data)
         }  
    }
    fetch()
    },[])
  
    const handleDelete= async(ev)=>{
      if(ev){
        let res=await axios.delete("http://localhost:5000/api/updateList")
      }else{
        let res=await axios.delete("http://localhost:5000/api/listitem")
      }
    }
  return (
    <div>
        <div>
            <HomeSideNavBar/>
        </div>
        <Grid width={'50%'}
                marginLeft={30} 
                p={3}>
                <Grid container direction="column" justifyContent={"flex-start"} >
                    <Grid  container  direction="row" justifyContent={"space-between"}  bgcolor={"GrayText"}>
                      <Grid container justifyContent="flex-start" bgcolor={"ButtonFace"} maxWidth="50%" >
                         <Typography maxWidth="15%" >
                            <Image src={info.res.image} style={{borderRadius:"99rem"}} />
                         </Typography>
                      
                       <Typography m={"4% 2%"}>
                            {name}
                         </Typography>
                      </Grid>
                      <Typography  maxWidth="30%">
                        <Condinal istrue={ name!=="reading list"}>
                            <IconButton onClick={e=>setopen((prev)=>!prev)}>
                            <MdOutlineMoreHoriz/>
                          </IconButton>
                        </Condinal>

                        <Condinal istrue={open}>
                          <ListDropdown setOpen={setopen} data={data}/>
                        </Condinal>

                        </Typography>
                    </Grid>
                    <Typography marginTop={"2%"} variant="h5" align='left'>
                       <b>{name}</b> 
                    </Typography>
                </Grid>
                <Divider style={{color:"#000000",marginTop:"2%"}}/>
            </Grid>
            {/*{ data?  <RenderingData  />}:  <Typography marginTop={"2%"} variant="h5" align='left'>
                       Add your favorite stories to your list. Simply click the  <MdOutlineBookmarkAdd/> on any Medium story to get started.
                    </Typography> */}
            <div>
                <SearchBar profile={true} /> 
            </div>
       
    </div>
  )
}

export default ListLayout