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
import Image from './Components/Image';
import RenderingData from './Components/RenderingData';
import {data} from '../dt';
const UsersProfiles = () => {
    const {user} = useParams();
    const navigate = useNavigate()
    useEffect(() => {}, [])
    return (
        <div>
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

                        <Typography variant='h4'
                            m={3}>
                            {user} 
                        </Typography>
                    </Grid>
                    <Divider/>
                    <RenderingData data={data}/>
                </Grid>

                <Typography>
                    <SearchBar info={user}/>
                </Typography>
            </Grid>
        </div>
    )
}

export default UsersProfiles
