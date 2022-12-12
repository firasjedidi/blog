import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import useri from '../dist/assets/user.jpg'
import {
    Grid,
    Typography,
    Divider,
    Button,
    IconButton
} from '@mui/material'
import axios from 'axios';
import SaveDropMenu from './Components/CoustemMenu/SaveDropMenu'
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import SearchBar from './Components/CoustemNav/SearchBar';
import Image from './Components/Image';
import Comments from './Components/Dialogs/Comments';
import {MdBookmark, MdOutlineBookmarkAdd} from "react-icons/md";
import {BsChat}from "react-icons/bs"
import {FaLink} from "react-icons/fa";
const LayOut = () => {
    const {users, title} = useParams();
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [change, setchange] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [info, setinfo] = useState({})
    useEffect(() => {
        setinfo(JSON.parse(localStorage.getItem("user")))
        
    }, [])
    const handleClickToOpen = () => {
        setDialog(true)
    }
    const handleToClose = () => {
        setDialog(false)
    }
 
    console.log(info);
    return (
        <div>
            <Grid>
                <Typography>
                    <HomeSideNavBar/>
                </Typography>
                <Grid width={'60%'}
                    height={"100%"}
                    container
                    direction="row"
                    marginLeft={"10%"}
                    marginRight={"10"}
              
                    justifyContent={"space-between"}
                    alignItems="center">
                    <Grid container direction="row"
                        m={5}
                        justifyContent={"space-between"}
                        alignItems="center">

                        <Grid container direction="row"
                            width={"30%"}
                            justifyContent="flex-start">
                            <Typography m={1}
                                width="15%">
                                <Image src={useri}
                                    style={
                                        {borderRadius: 20}
                                    }/>

                            </Typography>
                            <Grid align='left'
                                m={1}>
                               
                                <Typography>date</Typography>
                            </Grid>
                        </Grid>
                        <Grid container direction="colunm"
                            justifyContent={"flex-end"}
                            width={"20%"}
                            height="30%">
                            <Typography m={1}>
                                <IconButton size='small'
                                    onClick={
                                        (e) => navigator.clipboard.writeText(location.href)
                                }><FaLink/></IconButton>
                            </Typography>
                            <Typography align='right'>
                                <IconButton onClick={
                                    (e) => {
                                        setchange(true);
                                        setOpen((prev) => !prev)
                                    }
                                }>
                                    {
                                    change ? <MdBookmark/>: <MdOutlineBookmarkAdd/>
                                } </IconButton>
                                <Typography> {
                                    open ? <SaveDropMenu setOpen={setOpen}
                                        setchange={setchange}
                                        change={change}
                                        id={info.res.id}/> : null
                                } </Typography>
                            </Typography>

                            <Typography></Typography>
                        </Grid>

                    </Grid>

                    <Grid container direction="colunm"
                        justifyContent={"center"}
                        margin="1% 4.2%">
                        {/* map */}
                        <Typography variant='h3'align='center' >
                            <b>title of what is going</b>
                            <Divider sx={{mt:1,color:"GrayText"}}/>
                        </Typography>
                       
                        <Typography  marginTop={"10%"} >
                            <Image src="https://uncw.edu/languages/spanish/grad-images/Im-Interested-1024x384.png"  />
                        </Typography>
                       
                        <Typography  variant='p'   fontSize={20} letterSpacing="-0.003em" marginTop={3} marginBottom={"5%"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt maiores explicabo, placeat quisquam nulla impedit, dolore architecto quod labore beatae magni repellendus totam. Beatae dolore sit assumenda fugit harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti facere rem aut quia odio, cupiditate saepe rerum, dicta exercitationem delectus asperiores, commodi dolorem? Sapiente quo eos perspiciatis eligendi minima.
                        </Typography>
                        <Typography style={{position:"fixed",bottom:"2%",backgroundColor:"ButtonFace",width:"5%",borderRadius:'99rem'}}>
                            <IconButton  onClick={handleClickToOpen} >
                                <BsChat/>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
              

                <Comments dialog={dialog} handleToClose={handleToClose}  />
                <Typography>
                    <SearchBar info={users}  />
                </Typography>
            </Grid>
        </div>
    )
}
export default LayOut
