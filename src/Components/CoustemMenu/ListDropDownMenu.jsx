import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Grid,
    Typography,
    Divider,
    Button,
    ClickAwayListener,

} from '@mui/material'
import axios from 'axios'
import  NewList  from '../Dialogs/NewList'
const ListDropdown = ({setOpen,data}) => {
    const navigate = useNavigate()
    const [dialog, setDialog] = useState(false)
    const handleClick=async(e)=>{
       if(e==="edit"){   
        setDialog(true)
       }else{
        let res=await axios.delete(`http://localhost:5000/api/list/${data[0]["id"]}`)
        if (res.data.code) {
            alert(res.data.code)
        } else {
            navigate(`/Saved`)
        }
       } 
    }
    const handleToClose=()=>{
       
        setDialog(false)
    }
  console.log(data);
  return (
    <div>
        <ClickAwayListener onClickAway={
                (e) => setOpen(false)
            }>
                <Grid container
                    direction={"column"}
                    alignItems="center"
                    bgcolor="ButtonFace"
                    borderRadius={'5%'}
                    position="absolute"
                    width={"10%"}
                    margin={"0.5% -1.5%"}
                   
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
                            e => handleClick('edit')
                        }>
                            <li style={{cursor:"pointer"}} >Edit list</li> 

                        </Typography >

                        {
                            dialog
                            ?
                            <NewList 
                                dialog={dialog}
                                handleToClose={handleToClose}
                                user={data}
                                cases={true}
                            />
                            :
                            null
                        }
                            <NewList 
                                dialog={dialog}
                                handleToClose={handleToClose}
                                user={data[0]}
                                cases={true}
                            />
                        <Divider 
                        />
                        <Typography  color="error" 
                            onClick={
                                (e) => handleClick('delete')
                        }>
                            <li style={{cursor:"pointer"}} >Delete list</li>
                        </Typography >
                    </Typography>
                </Grid>
        </ClickAwayListener>
    </div>
  )
}

export default ListDropdown