import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import {MdClear} from "react-icons/md";
import SignInDialog from './SignInDialog';
import SignUpDialog from './SignUpDialog';
export default function FormDialog({dialog, handleToClose ,form,setForm}) {
    const handleClick = (e) => {
        setForm(e)
    }
    return (
        <div >
            <Dialog open={dialog}
                onClose={handleToClose}
                PaperProps={{sx:{width:'35%',height:'100%'}}}
                >
                <DialogActions  >
                    <Typography m={1} >
                        <Button 
                            onClick={handleToClose}
                            color='inherit'
                            endIcon={<MdClear/>}
                            autoFocus>
                        </Button>
                    </Typography> 
                </DialogActions>
                 {form==="signin"?<SignInDialog handleClick={handleClick}/>:<SignUpDialog handleClick={handleClick}/>}
                
            </Dialog>
        </div>
    )
}
