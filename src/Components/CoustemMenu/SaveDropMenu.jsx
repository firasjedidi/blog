import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {
    Grid,
    Typography,
    Divider,
    Button,
    ClickAwayListener,
    Checkbox
} from '@mui/material'
// import NewList from '../Dialogs/NewList'
import axios from 'axios'
const SaveDropMenu = ({setOpen, setchange,change,id}) => {
    const navigate = useNavigate()
    const [lists,setList]=useState([])
   

    useEffect(()=>{
        
        const fetch=async()=>{  
            let res=await axios.get(`http://localhost:5000/api/list/${id}`)
             if (res.data.code) {
              alert(res.data.code)
             } else {
                console.log(res);
                setList(res.data)
             }  
        }
        fetch()
    },[])
    const handleSave=async(listid)=>{
     let res=await axios.post("http://localhost:5000/api/updateList",{listid,post})
        
    }


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
                    width={"12%"}
                    right="32%"

                  
                >
                    <Typography bgcolor="ButtonFace"
                        style={
                            {
                                width: "20px",
                                height: "20px",
                                transform: "rotate(45deg)",
                                marginTop:"-2%",
                                marginLeft:"68%"
                            }
                    }
                    ></Typography>
                    
                    {lists.map((ev,key)=>(
                    <Typography key={key} align='center'
                       >
                        
                        <Typography color="inherit" m={1}>
                            
                            <Checkbox id='saved' color='success' 
                                onClick={
                                    (e) =>{ setchange(e.target.checked);handleSave(ev.id)}
                                }/><label htmlFor="saved">{ev.list_name}</label>
                        </Typography>
                        <Divider 
                        />
                       
                    </Typography>
                ))}
                </Grid>
            </ClickAwayListener>
        </div>
    )
}
export default SaveDropMenu
