import React, {useState} from 'react'
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import CustmInput from '../CoustemInput/CustmInput';
import {Grid, IconButton} from "@mui/material";
import FormData from 'form-data'
import axios from 'axios';
import {
    MdAlternateEmail,
    MdOutlineLock,
    MdOutlineKeyboardArrowLeft,
    MdOutlinePersonOutline,
    MdOutlineBrokenImage,
    MdOutlineInfo
} from 'react-icons/md'
import {signUp, login, Update} from '../../auth/Auth';
import Condinal from '../Condinal';

//
export default function Form(props) {
    const [form, setForm] = useState({username: '', email: '', password: '', image: ''})
    const handleChange = async (e) => {
        const {name, value} = e.target
        if (name === 'file') {
            setForm({
                image: URL.createObjectURL(e.target.files[0])
            })
            const formData = new FormData();
            formData.append("file", e.target.files[0]);
            formData.append("upload_preset", "iyhf8gx0")
            var res = await axios.post("https://api.cloudinary.com/v1_1/dod9yhmlt/image/upload", formData)
            console.log(res.data.url, 'url');
            setForm({image: res.data.url})

        } else {
            setForm((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
    }

    const handelClick = () => {
        if (props.case === 'signup') {
            signUp(form);
        }
        if (props.case === 'signin') {
            login(form)
        }
        if (props.case === 'update') {
            Update(form)
        }

    }
    return (
        <div>
            <DialogTitle align="center" variant='h4'
                m={4}>
                {
                props.case === "signup" ? <Grid>
                    <Typography fontSize={21}>Sign up with account</Typography>
                    <Typography m={1}>Enter your credential to create an account.</Typography>
                </Grid> : props.case === "signin" ? <Grid>
                    <Typography fontSize={21}>
                        Sign In with account</Typography>
                    <Typography m={1}>Enter the credential to Login</Typography>
                </Grid> : <Grid>
                    <Typography fontSize={21}>
                        Update your account</Typography>

                </Grid>
            } </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Grid m={4}
                        align='center'
                        alignItems='stretch'
                        direction='column'>
                        {
                        props.case === "signup" || "update" ? <CustmInput name="username" type="text"
                            onChange={handleChange}
                            icon={<MdOutlinePersonOutline/>}/> : null
                    }
                       
                        <CustmInput name="email" type="email"
                            onChange={handleChange}
                            icon={
                                <MdAlternateEmail
                            variant="filled"/>
                            }/>
                        <CustmInput name="password" type="password"
                            onChange={handleChange}
                            icon={<MdOutlineLock/>}/> {
                        props.case === "update" ? <CustmInput name="Tell us something about u" type="text"
                            onChange={handleChange}
                            icon={<MdOutlineInfo/>}/> : null
                    } 
                    {
                        props.case === "signup" || "update" ? form.image ? <img src={
                                form.image
                            }
                            alt=""
                            style={
                                {
                                    width: '15%',
                                    borderRadius: 55
                                }
                            }/> : <Typography>
                            <input accept="image/*"
                                style={
                                    {display: 'none'}
                                }
                                onChange={handleChange}
                                id="raised-button-file"
                                type="file"
                                name='file'/>
                            <label htmlFor="raised-button-file">
                                <IconButton variant="raised" component="span"
                                    children={<MdOutlineBrokenImage/>}/>
                            </label>
                        </Typography> : null
                    }
                        <Typography align="center"
                            m={2}>
                            <Button onClick={handelClick}
                                color="success">Done</Button>
                        </Typography>
                        <Typography align="center"
                            m={1}>
                                <Condinal istrue={props.case === "signup" || props.case === "signin"}>
                            <Button onClick={
                                    props.handleViewChange
                                }
                                startIcon={
                                     <MdOutlineKeyboardArrowLeft/>
                                }
                                color="success">
                                {
                                props.case === "signup" ? <Typography>All sign up options</Typography> : props.case === "signin" ? <Typography>All sign in options</Typography> : null
                            } </Button></Condinal>
                        </Typography>
                    </Grid>
                </DialogContentText>
            </DialogContent>
        </div>
    )
}
