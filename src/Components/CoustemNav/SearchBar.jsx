import React, {useState, useEffect} from 'react'
import {Grid, Typography, Divider, Button} from '@mui/material'
import {useNavigate,NavLink} from 'react-router-dom'
import {Search} from '../Search'
import Image from '../Image'
import Condianl from '../Condinal'
import useri from '../../../dist/assets/user.jpg'
import axios from 'axios'
import UpdateDialog from '../Dialogs/UpdateDialog'
export default function SearchBar({info,profile,tag,more}) {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)
    const [data, setdata] = useState([])
    const [status,setStatus] = useState(false)
    const [dialog, setDialog] = useState(false)
    const handleClickToOpen = () => {
        setDialog(true)
    }
    const handleToClose = () => {
        setDialog(false)
    }
    const navigate = useNavigate()
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    useEffect(() => {
        const fetch = async () => {
            let res = await axios.get(`http://localhost:5000/api/search/?q=${query}`)
            setdata(res.data)
        }
        if (query.length > 2) {
            fetch();
            if (data) {
                setOpen(true);
            }
        } else 
            setOpen(false);
    }, [query])
    const handleClick = (e) => {
        navigate(`/Tag/${e}`)
    }
    const handleFollow = () => {
        setStatus((prev)=>!prev)
    }
    useEffect(()=>{
        const fetch=()=>{
           // let res = await axios.get(`http://localhost:5000/api/followingOrNot/`)
        }
        fetch()
        
    },[])
    return (
        <div>
            <Grid style={
                {
                    boxShadow: "0px 0px 10px #cfd8dc",
                    right: 0,
                    top: 0,
                    width: "25%",
                    height: "100%",
                    backgroundColor: "white",
                    position: 'fixed'
                }
            }>
                <Grid>
                    <Search 
                        handleChange={handleChange}
                        open={open}
                        setOpen={setOpen}
                        data={data}
                    />
                </Grid>
                <Condianl istrue={info} >
                <Grid direction={"column"}
                    marginTop="15%">
                    <Typography margin={"20% 5% 1% 6%"}
                        align='left'>
                        <Image src={useri}
                            style={
                                {
                                    borderRadius: 45,
                                    width: "20%"
                                }
                            }/>
                    </Typography>
                    <NavLink 
                    to={`/${info}`} 
                    style={{textDecoration:"none"}}>
                    <Typography margin={"1% 5% 1% 8%"}
                        color="GrayText"
                        align='left'
                        variant='h6'>
                       {info}
                    </Typography>
                    </NavLink>
                    <Typography margin={"1% 5% 3% 8%"}
                        fontSize="14px"
                        align='left'>
                        12 followers
                    </Typography>
                    <Typography margin={"2% 5% 5% 8%"}
                        fontSize="14px"
                        align='left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque officia soluta non obcaecati ducimus, unde nam aperiam. Ullam, pariatur maiores beatae, doloribus voluptas, aspernatur praesentium suscipit mollitia inventore nihil omnis?
                    </Typography>
                    <Typography margin={"1% 5% 1% 8%"}
                        align='left'>
                        <Button   onClick={handleFollow}   style={
                            {
                                backgroundColor: "#0F730C",
                                color: "#F9FBF9",
                                borderRadius: "99em"
                            }
                        }>
                            {status? "unfollow": "follow"} 
                        </Button>
                    </Typography>
                </Grid>
                </Condianl>
              
                <Condianl istrue={tag}>
                <Typography>
                
                    <Button onClick={
                        (e) => handleClick("Technology")
                    }>Technology</Button>
                    <Button onClick={
                        (e) => handleClick("Business")
                    }>Business</Button>
                    <Button onClick={
                        (e) => handleClick("Psychology")
                    }>Psychology</Button>
                    <Button onClick={
                        (e) => handleClick("Art")
                    }>Art</Button>
                </Typography>
                </Condianl>

                <Condianl istrue={profile} >
                  <Grid direction={"column"}
                 
                   >
                        <Typography margin={"13% 5% 1% 6%"}
                            align='left'>
                            <Image src={useri}
                                style={
                                    {
                                        borderRadius: 75,
                                        width: "35%"
                                    }
                                }
                            />
                        </Typography>
                        <Typography margin={"1% 5% 1% 8%"}
                            color="GrayText"
                            align='left'
                            variant='h6'>
                           name
                        </Typography>
                        <Typography margin={"1% 5% 1% 8%"}
                            color="GrayText"
                            align='left'
                            fontSize={"14px"}>
                            12 following
                        </Typography>
                        <Typography margin={"1% 5% 1% 8%"}
                            color="GrayText"
                            align='left'
                            fontSize={"14px"}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus alias minima, recusandae ratione aspernatur voluptatibus dolores doloremque aperiam nemo autem est et nihil ab aut culpa cupiditate incidunt veritatis quo.
                        </Typography>

                        <Typography  align='left' margin={"1% 5% 1% 6%"}>
                            <Button color="success" onClick={handleClickToOpen} size='small'>Edit Profile</Button>
                        </Typography>
                        
                    </Grid>
                </Condianl>
                <Condianl istrue={dialog}>
                    <UpdateDialog dialog={dialog} handleToClose={handleToClose} />
                </Condianl>
                <Condianl istrue={more}>
                <Typography align='left'
                    m={"5% 5% 2% 8%"}>
                    More from Blog...
                </Typography>
                <Grid container direction="row" justifyContent="space-between">
                    <Typography align="left " width="30%"
                        marginLeft={4}>
                        <Grid container
                            direction={"row"}
                            marginTop={1}>
                            <Typography width="20%">
                                <Image src={useri}
                                    style={
                                        {
                                            borderRadius: 25,
                                            width: "100%"
                                        }
                                    }/>
                            </Typography>
                            <NavLink to={`/$`} 
                              style={{textDecoration:"none"}}>
                            <Typography margin={"1% 3%"}
                                variant="p"
                                color="GrayText"
                                fontSize={"13px"}>name</Typography>
                                </NavLink>
                        </Grid>
                        <Typography variant='h5'>
                            title
                        </Typography>
                    </Typography>
                    <Typography width="13%"
                        m={2}>
                        <Image src={useri}
                            style={
                                {
                                    borderRadius: 2,
                                    width: "100%"
                                }
                            }/>
                    </Typography>
                </Grid>
                </Condianl>
            </Grid>

        </div>
    )
}
