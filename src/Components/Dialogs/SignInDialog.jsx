import React,{useState} from 'react'
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {FcGoogle} from "react-icons/fc";
import {BsFacebook, BsEnvelope} from "react-icons/bs";
import { Facebook,Google } from '../../auth/Providersauth';
import Form from './Form';
export default function SignInDialog({handleClick}) {
  const [account,setAccount]=useState(false)
  const handleViewChange=()=>{
    setAccount((prev)=>!prev)
  }
    return (
        <div>
            {
            account 
                ? 
            <Form case={"signin"} handleViewChange={handleViewChange}/> 
                : 
            <div>
                <DialogTitle align="center" variant='h4'
                    m={4}>
                    Welecome Back
                </DialogTitle>
                <DialogContent>
                    <DialogContentText align="center">
                        <Typography m={4}
                            align="center">
                            <Typography m={2}>
                                <Link underline="none" color='inherit' onClick={()=>Google("signin")}>
                                    <Button size='large' variant="outlined" color='inherit'
                                        sx={
                                            {borderRadius: 6}
                                        }
                                        startIcon={<FcGoogle/>}>Sign in with Google</Button>
                                </Link>
                            </Typography>
                            <Typography m={2}>
                                <Link underline="none" color='inherit'  onClick={()=>Facebook("signin")}>
                                    <Button variant="outlined" color='inherit'
                                        sx={
                                            {borderRadius: 6}
                                        }
                                        size='large'
                                        startIcon={
                                            <BsFacebook
                                        color='#1877F2'/>
                                    }>Sign in with Facebook</Button>
                                </Link>
                            </Typography>
                            <Typography m={2}>
                                <Link underline="none" color='inherit' onClick={handleViewChange}>
                                    <Button variant="outlined" size='large' color='inherit'
                                        sx={
                                            {borderRadius: 6}
                                        }
                                        startIcon={<BsEnvelope/>}>Sign in with Account
                                    </Button>
                                </Link>
                            </Typography>
                            <Typography>
                                <Typography m={4}>
                                    No account?
                                    <Button color='success'
                                        onClick={(e)=>handleClick("signup")}>Create one</Button>
                                </Typography>
                            </Typography>
                        </Typography>
                        <Typography align="center">
                            <Typography m={8}>Click “Sign In” to agree to Blog Terms of Service and acknowledge that Blog Privacy Policy applies to you.</Typography>
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            </div>
            }
        </div>
    )
}
