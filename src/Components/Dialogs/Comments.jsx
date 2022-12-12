import React, {useState,useEffect} from 'react'
import {
    Dialog,
    DialogActions,
    DialogContentText,
    DialogTitle,
    DialogContent,
    Button,
    Typography,
    Grid,
    Divider
} from "@mui/material";
import {MdClear} from "react-icons/md";
import TextArea from "../CoustemInput/TextArea"
import Condinal from '../Condinal';
import Image from '../Image';
import axios from 'axios';
const Comments = ({dialog, handleToClose}) => {
    const [toggle, setToggle] = useState(false)
    const [comment, setComment] = useState("")
   
    const handleClick=async()=>{
        let res=await axios.post("http://localhost:5000/api/comment")
    }
    return (
        <div>
            <Condinal istrue={dialog} 
             >
            <Grid  
            style={{ 
            backgroundColor:"white",
            width:"28%", 
            height:"100%", 
            direction:"column", 
            position:"fixed" ,
            top:"0",
            right:"0",
            zIndex:"1",
            overflowY:"scroll",
            overflowX:"hidden",
            boxShadow: "0px 0px 10px #cfd8dc",
        }}
             >
                
                    <Grid container direction="row"
                        justifyContent={"space-between"}>
                        <DialogTitle>
                            Responses
                        </DialogTitle>

                        <Typography m={1}>
                            <Button onClick={handleToClose}
                                color='inherit'
                                endIcon={<MdClear/>}></Button>
                        </Typography>
                    </Grid>

               
                        <Typography align='center' marginBottom="2%">
                            <Condinal istrue={toggle}>
                                <Grid container direction="row"
                                    width={"25%"}
                                    position={"sticky"}
                                    margin="0% 1% -13% 9%"
                                    justifyContent="flex-start">
                                    <Typography m={1}
                                        width="25%">
                                        <Image src="https://colemansearchgroup.com/wp-content/uploads/2018/02/about-person-image.png"
                                            style={
                                                {borderRadius: 20}
                                            }/>
                                    </Typography>
                                    <Grid align='left'
                                        m={1}>

                                        <Typography>date</Typography>
                                    </Grid>
                                </Grid>

                            </Condinal>
                            <Typography >
                                <TextArea onClick={
                                        e => setToggle(true)
                                    }
                                    onChange={
                                        e => setComment(e.target.value)
                                    }
                                    placeholder="what are your thoughts?"
                                    type='text'
                                    value={comment}
                                    style={
                                        toggle ? {
                                            width: "85%",
                                            border: "none",
                                            padding: "13% 3% 23% 3%",
                                            boxShadow: "0px 1px 6px 0px rgb(0.5,0.5,0.5,0.5)",
                                            outline: "none",
                                            borderRadius: "2%",
                                            fontSize: "14px",
                                            resize: "none",
                                            textoverflow: "auto",
                                            marginTop:"2%"

                                        } : {
                                            width: "85%",
                                            height: "90%",
                                            border: "none",
                                            padding: "4%",
                                            boxShadow: "0px 1px 6px 0px rgb(0.5,0.5,0.5,0.5)",
                                            outline: "none",
                                            borderRadius: "2%",
                                            resize: "none",
                                            overflow:"hidden",
                                            marginTop:"2%"
                                        }
                                    }/>
                            </Typography>
                            <Condinal istrue={toggle}>
                                <Typography margin={"-28% 0% 2% 32%"}>
                                    <Button size='small'
                                        onClick={
                                            (e) => {
                                                setComment("");
                                                setToggle(false)
                                            }
                                        }
                                        color="inherit">cancel</Button>
                                    <Button size='small'
                                    onClick={handleClick}
                                        style={
                                            {
                                                backgroundColor: "#0F730C",
                                                color: "#F9FBF9",
                                                marginLeft: "5%"
                                            }
                                    }>Responde</Button>
                                </Typography>
                            </Condinal>
                            <Divider sx={
                                {mt: "12%"}
                            }/>

                            <Grid container direction="column"  m={1.5}>
                                <Grid container direction="row" justifyContent="flex-start">
                                    <Typography m={0.5}
                                        width="10%">
                                        <Image src="https://colemansearchgroup.com/wp-content/uploads/2018/02/about-person-image.png"
                                            style={
                                                {borderRadius: 20}
                                            }/>
                                    </Typography>
                                    <Grid align='left'
                                        m="1%"
                                        >

                                        <Typography margin={"17% 1% 1% 1%"}>date</Typography>
                                    </Grid>
                                </Grid>
                                <Typography  m="3%" color={"GrayText"} align='left' fontSize={"14px"} fontFamily="Arial,Helvetica, Sans-serif">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero quisquam magnam. Consequatur iste ad optio maxime et, magni, soluta vel animi velit voluptatibus reiciendis illo rerum tempora, repudiandae praesentium?

                                </Typography>


                            </Grid>
                            <Divider />
                            <Grid container direction="column" m={1.5}>
                                <Grid container direction="row"  justifyContent="flex-start">
                                    <Typography m={0.5}
                                        width="10%">
                                        <Image src="https://colemansearchgroup.com/wp-content/uploads/2018/02/about-person-image.png"
                                            style={
                                                {borderRadius: 20}
                                            }/>
                                    </Typography>
                                    <Grid align='left'
                                        m="1%"
                                        >

                                        <Typography margin={"17% 1% 1% 1%"}>date</Typography>
                                    </Grid>
                                </Grid>
                                <Typography  m="3%" color={"GrayText"} align='left' fontSize={"14px"} fontFamily="Arial,Helvetica, Sans-serif">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero quisquam magnam. Consequatur iste ad optio maxime et, magni, soluta vel animi velit voluptatibus reiciendis illo rerum tempora, repudiandae praesentium?

                                </Typography>


                            </Grid>
                            <Divider />
                            <Grid container direction="column" m={1.5}>
                                <Grid container direction="row"  justifyContent="flex-start">
                                    <Typography m={0.5}
                                        width="10%">
                                        <Image src="https://colemansearchgroup.com/wp-content/uploads/2018/02/about-person-image.png"
                                            style={
                                                {borderRadius: 20}
                                            }/>
                                    </Typography>
                                    <Grid align='left'
                                        m="1%"
                                        >

                                        <Typography margin={"17% 1% 1% 1%"}>date</Typography>
                                    </Grid>
                                </Grid>
                                <Typography  m="3%" color={"GrayText"} align='left' fontSize={"14px"} fontFamily="Arial,Helvetica, Sans-serif">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero quisquam magnam. Consequatur iste ad optio maxime et, magni, soluta vel animi velit voluptatibus reiciendis illo rerum tempora, repudiandae praesentium?

                                </Typography>
                            </Grid>
                            <Divider />
                        </Typography>

                    
                
                </Grid>
            </Condinal>
        </div>
    )
}

export default Comments
