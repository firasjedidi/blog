import React,{useState} from 'react'
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import {
    Grid,
    Typography,
    Button,
    Divider,
    IconButton
} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {MdOutlineMoreHoriz} from 'react-icons/md'
import SearchBar from './Components/CoustemNav/SearchBar'
import StorieDropdown from './Components/CoustemMenu/StorieDropdown'
import Condinal from './Components/Condinal'
export default function Stories() {
    const navigate = useNavigate()
    const [color, setcolor] = useState(true)
    const [open, setOpen] = useState(false)
    const handleClick = (e) => {
        if(e==="Published"){
           setcolor(false)
           // var res=axios.get("")
        }else{
         setcolor(true)
          // var res=axios.get("")
        }
     }
    return (
        <div>
            <Typography>
                <HomeSideNavBar/>
            </Typography>
            <Grid width={'50%'}
                marginLeft={30}
                p={5}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography m={3}
                        variant="h3">
                        Your stories
                    </Typography>
                    <Typography m={3}>
                        <Button style={
                                {
                                    backgroundColor: "#0F730C",
                                    color: "#F9FBF9",
                                    borderRadius: 25,
                                    fontSize: 12,
                                    padding: 10
                                }
                            }
                            onClick={
                                () => navigate("/Write")
                        }>
                            Write a story</Button>
                    </Typography>
                </Grid>

                <Grid container direction="row"
                        justifyContent={"flex-start"}
                        alignItems="center">
                        <Typography variant='h7'
                            onClick={(e)=>handleClick("Drafts")}
                            m={1}
                            style={color?{color:"#000000"}:{color:"GrayText"}}
                            >
                              Drafts
                             </Typography>
                        <Typography variant='h7'
                        onClick={(e)=>handleClick("Published")}
                        style={!color?{color:"#000000"}:{color:"GrayText"}}
                            m={1}>
                              Published
                             </Typography>

                    </Grid>
                <Divider/>

                <Grid  marginTop={2}> {/* map */}
                    <Grid m={2}  container direction="row" alignContent="space-between">

                        <Grid p={3}
                            width={'88%'}
                            container
                            direction="column"
                            alignContent="flex-start" >
                            <Typography m={0.2}
                                fontSize={20}
                                variant="h2"
                                align="left">
                                <b>title</b>
                            </Typography>
                            <Typography align="left"
                                fontSize={14}>
                                part of the blog
                            </Typography>
                        </Grid>
                        <Typography m={2}>
                            <IconButton onClick={e=> setOpen((prev) => !prev)}  children={<MdOutlineMoreHoriz/>}/>
                        </Typography>
                        <Condinal istrue={open}>
                            <StorieDropdown setOpen={setOpen} />
                        </Condinal>
                    </Grid>

                    <Divider/>

                </Grid>

            </Grid>
            <Typography>
                <SearchBar  more={true} tag={true}/>
            </Typography>
        </div>
    )
}
