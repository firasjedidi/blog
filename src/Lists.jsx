import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import {Grid, Typography, Button, Divider} from '@mui/material'
import  NewList  from './Components/Dialogs/NewList';
import SearchBar from './Components/CoustemNav/SearchBar';
import axios from 'axios';
export default function Lists({info}) {
    const navigate=useNavigate();
    const [dialog, setDialog] = useState(false)
    const [data, setdata] = useState([])
    

    const handleClickToOpen = () => {
        setDialog((prev)=>!prev)
    }
    const handleToClose = () => {
      setDialog((prev)=>!prev)
    }
    useEffect(()=>{
        let fetch=async()=>{
             let res=await axios.get(`http://localhost:5000/api/list/${info.res.id}`)
             setdata(res.data);
        }
        fetch()
    },[])
    return (
        <div>
            <Typography>
              <HomeSideNavBar/>
            </Typography>
            <Grid width={'50%'}
                marginLeft={30}
                p={5}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography m={3}>
                        Your lists
                    </Typography>
                    <Typography m={3}>
                        <Button style={
                            {
                                backgroundColor: "#0F730C",
                                color: "#F9FBF9",
                                borderRadius: 25,
                                fontSize: 12
                            }
                        }
                        onClick={handleClickToOpen}
                        >
                            New lists</Button>
                    </Typography>
                </Grid>
                <Divider/>
                <Grid> {data.map((ev,key)=>(
                    <Grid p={5}
                        key={key}
                        marginTop={6}
                        boxShadow={1}
                        backgroundColor="#FAFAFA"
                        borderRadius={2}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Typography fontSize={24}>{ev.list_name}</Typography>
                        <Typography>
                            <Button onClick={e=> navigate(`/Saved/${ev.list_name}`)}>
                                View list
                            </Button>
                        </Typography>
                    </Grid>))}
                </Grid>

            </Grid>
            <div>
              {dialog?<NewList dialog={dialog} handleToClose={handleToClose} user={info.res} cases={false}/>:null}
            </div>
            <Typography>
                <SearchBar more={true} tag={true} />
            </Typography>
      </div>
    )
}
