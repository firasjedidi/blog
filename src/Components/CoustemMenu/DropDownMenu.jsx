import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Grid, Typography, Divider, Button,ClickAwayListener} from '@mui/material'
export default function DropDownMenu({SetDropMenu,top}) {
    const navigate=useNavigate()
    return (
     
            <ClickAwayListener onClickAway={(e)=>SetDropMenu((prev)=>!prev)}>
            <Grid container
                direction={"column"}

                bgcolor="ButtonFace"
                style={
                    top?
                    {
                        position:"absolute",
                        right: "16%",
                        width: "10%",
                        top: "8%"

                    }:
                    {
                        position: "absolute",
                        left: "6%",
                        width: "100%",
                        bottom: "12%",
                        height:"10%",
                       

                    }
            }>
                <Typography  bgcolor="ButtonFace" style={top?
                    {
                        width: "18px",
                        height: "18px",
                        transform: "rotate(45deg)",
                        position: "absolute",
                        top: "-5%",
                        right: "50%",
                    }
                    :
                    {
                        width: "18px",
                        height: "18px",
                        position: "absolute",
                        transform: "rotate(45deg)",
                        position: "absolute",
                        bottom: -6,
                        left:10.5
                    }
                }></Typography>
                <Typography   m={"5%"} width="100%"
                   >
                    <Typography color="inherit" align='center' bgcolor="ButtonFace" width="80%"  className='no-bg-btn'
                        onClick={
                            (e) => navigate('/Profile')
                    }>
                        <li name='Profile'>Profile</li>
                    </Typography>
                    <Divider sx={{m:"1% 3%"}}/>
                    <Typography color="inherit" align='center' bgcolor="ButtonFace" width="80%" className='no-bg-btn'
                        onClick={
                            (e) => navigate('/')
                    }>
                        <li name='SignOut'>SignOut</li>
                    </Typography>
                </Typography>
            </Grid>
            </ClickAwayListener>
       
    )
}
