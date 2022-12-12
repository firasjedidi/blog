import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import {Grid, Input} from '@mui/material';
import {MdClear, MdOutlineBrokenImage} from "react-icons/md";
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function Publish({dialog, handleToClose, SetInputVal, inpuVal}) {
    const handleChange = async (event) => {
        const {name, value} = event.target
        if (name === "cover_img") {
            SetInputVal({
                cover_img: URL.createObjectURL(event.target.files[0])
            })
            const formData = new FormData();
            formData.append("file", event.target.files[0]);
            formData.append("upload_preset", "iyhf8gx0")
            var res = await axios.post("https://api.cloudinary.com/v1_1/dod9yhmlt/image/upload", formData)
            SetInputVal({cover_img: res.data.url})
        }
        if (name === "context") {
            SetInputVal((prevState) => {
                return {
                    ...prevState,
                    [name]: value
                }
            })
        }
    }
    return (
        <div>
            <Dialog open={dialog}
                onClose={handleToClose}
                fullScreen>
                <DialogActions>
                    <Typography m={1}>
                        <Button onClick={handleToClose}
                            color='inherit'
                            endIcon={<MdClear/>}
                            ></Button>
                    </Typography>
                </DialogActions>
                <DialogContent>
                    <DialogContentText>
                        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Grid width='40%'
                                m={1}>
                                <Typography p={2}>
                                    <Typography>Story Preview</Typography>
                                </Typography>
                                <Grid> {
                                    inpuVal.cover_img ? <img src={
                                            inpuVal.cover_img
                                        }
                                        alt="cover-img"
                                        style={
                                            {
                                                width: '20%',
                                                height: 'auto',
                                                margin: 12
                                            }
                                        }/> : <Grid m={2}
                                        style={
                                            {
                                                backgroundColor: "#FAFAFA",
                                                width: '60%',
                                                height: 'auto'
                                            }
                                    }>
                                        <Typography m={2}>
                                            <input accept="image/*"
                                                style={
                                                    {display: 'none'}
                                                }
                                                onChange={handleChange}
                                                id="raised-button-file"
                                                type="file"
                                                name='cover_img'/>
                                            <label htmlFor="raised-button-file">
                                                <Typography fontSize={14}
                                                    p={4}>
                                                    Include a high-quality image in your story to
                                                                                                make it more inviting to readers.
                                                </Typography>
                                            </label>
                                        </Typography>
                                    </Grid>
                                } </Grid>
                                <Typography p={2}>
                                    <Input type='text' placeholder='Write a preview subtitle...'/>
                                </Typography>
                                <Typography p={2}
                                    style={
                                        {
                                            width: '60%',
                                            height: 'auto'
                                        }
                                }>
                                    <b>Note:</b>
                                    Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.
                                </Typography>
                            </Grid>
                            <Grid p={2}
                                width='40%'
                                m={1}>
                                <Typography m={2}>Publishing to:
                                </Typography>
                                <Typography m={2}
                                    fontSize={14}>Add some tags  so readers know what your story is about</Typography>
                                <Grid>
                                    <Typography m={2}>
                                        <Input type='text' fullWidth placeholder='Add a tag...'
                                            onChange={handleChange}
                                            name="context"/>
                                    </Typography>
                                </Grid>
                                <Typography p={2}>
                                    <Button style={
                                        {
                                            backgroundColor: "#0F730C",
                                            color: "#F9FBF9"
                                        }
                                    }>Publish now</Button>
                                </Typography>
                            </Grid>
                        </Grid>

                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}
