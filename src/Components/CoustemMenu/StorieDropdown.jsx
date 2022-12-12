import React from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Grid,
    Typography,
    Divider,
    Button,
    ClickAwayListener,

} from '@mui/material'

const StorieDropdown = ({setOpen}) => {
    const navigate = useNavigate()
  return (
    <div>
        <ClickAwayListener onClickAway={
                (e) => setOpen((prev) => !prev)
            }>
                <Grid container
                    direction={"column"}
                    alignItems="center"
                    bgcolor="ButtonFace"
                    borderRadius={'5%'}
                    position="absolute"
                    width={"10%"}
                    margin={"3.5% -5.5%"}
                   
                >
                    <Typography bgcolor="ButtonFace"
                        style={
                            {
                                width: "15px",
                                height: "15px",
                                transform: "rotate(45deg)",
                                marginTop:"-2%",
                                marginLeft:"-35%"
                            }
                    }
                    ></Typography>
                    <Typography align='center'margin={"3% 1%"}
                       >
                        <Typography   
                            onClick={
                                (e) => navigate('/')
                        }>
                            <li name='SignOut'>Edit draft</li>
                        </Typography >
                        <Divider 
                        />
                        <Typography  color="error" 
                            onClick={
                                (e) => navigate('/')
                        }>
                            <li name='SignOut'>Delete draft</li>
                        </Typography >
                    </Typography>
                </Grid>
        </ClickAwayListener>
    </div>
  )
}

export default StorieDropdown