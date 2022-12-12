import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {
    Grid,
    Typography,
    Divider,
    Button,
    Icon
} from '@mui/material'
import axios from 'axios';
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import SearchBar from './Components/CoustemNav/SearchBar';
import RenderingData from './Components/RenderingData';
import {AiFillTag} from "react-icons/ai";
import {data} from '../dt';


const Tag = () => {
    const {tag} = useParams();
    const navigate = useNavigate()
    // useEffect(()=>{
    // var res=axios.get(`http://localhost:5000/Tag/${tag}`)
    // //  console.log(res.data)
    // },[])
   
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
                    <Typography sx={
                            {
                                width: 30,
                                height: 30
                            }
                        }
                        bgcolor="ButtonFace"
                        borderRadius={50}>
                        <Icon children={<AiFillTag/>}
                            fontSize="small"
                            sx={
                                {m: 0.5}
                            }/>
                    </Typography>
                    <Typography variant='h4'
                        m={3}>
                        {tag} </Typography>

                </Grid>
                <Divider/> 
                <RenderingData data={data}  />
                
             </Grid>
           
            <Typography>
                <SearchBar   more={true} tag={true}/>
            </Typography>
        </Grid>
    )
}
export default Tag;
