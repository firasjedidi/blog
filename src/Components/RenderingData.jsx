import React from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Grid,
    Typography,
    Divider,
    Button,
} from '@mui/material'
import Image from './Image'
import useri from '../../dist/assets/user.jpg'
const RenderingData = ({data,active}) => {
    const navigate = useNavigate()
    const handle=(e,m)=>{
        if(e==="blog"){
            if(active) active()
            else navigate(`/${m.slice(0,m.indexOf('@'))}/${m}`)
        }else if(e=== "tag"){
            if(active) active()
            else navigate(`/Tag/${m}`)
        }else{
            if(active) active()
            else navigate(`/Tag/${m}`)
        }
    }
  return (
    <div >
        {
                data.map((ev,key) => (
                    <Grid marginTop={6} key={key} >
                        {/* map */}

                        <Grid container
                            direction={"row"}
                            >
                            <Typography width="4%" margin={"-1% 1% 1% 1%"} >
                                <Image src={useri}
                                    style={
                                        {
                                            borderRadius: 25,
                                            width: "100%"
                                        }
                                    }/>
                            </Typography>
                            
                            <Typography margin={"0% 1% "} onClick={e=>handle("person",ev.username)}
                                variant="h5"
                                color="GrayText"
                                fontSize={"13px"}>{ev.username}</Typography>
                                
                        </Grid>

                        <Grid p={1}
                            borderRadius={2}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            onClick={(e)=>handle("blog",ev.email)}
                            >
                                    
                            <Typography   style={{width:"75%"}} > 
                                
                                <Typography variant='h2'
                                    fontSize={22}  align="left" >
                                    <b>context || title</b>
                                </Typography>
                                <Typography marginTop={2}
                                    align="left">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum vel cumque nulla, a accusantium laudantium blanditiis tempora perferendis sed neque quis, odit est sequi, molestiae temporibus dolorem. Quidem, ipsam autem?
                                </Typography>
                                <Typography marginTop={2}
                                    marginBottom={3}
                                    align="left">
                                    <Button onClick={
                                        (e) => handle("tag")
                                    }>tag</Button>
                                   
                                </Typography>
                                    
                            </Typography  > 
                            <Typography width="20%" margin={"-5% 1% 1% 1%"} >
                                <Image src={useri}  />
                            </Typography>
                        </Grid>
                        <Divider/>

                    </Grid>
                ))
            }
    </div>
  )
}

export default RenderingData