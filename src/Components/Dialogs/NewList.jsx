import React, {useEffect,useRef} from 'react'
// ,{useState}
import {
    Dialog,
    DialogActions,
    DialogContentText,
    DialogContent,
    DialogTitle,
    Button,
    Typography,
    Input,
    Checkbox
} from '@mui/material'
import {MdClear} from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const NewList = ({dialog, handleToClose, user, cases}) => {
    const [createList, setList] = React.useState({
        list_name:'',
        privte: user.privte==="1" ? true: false,
        user_id: user.user_id || user.id,
        list: user.list || JSON.stringify([])
    })
    const id = user.id
    const navigate = useNavigate()
   
   
    const handleChange = (e) => {
        const {name, value, checked} = e.target
        if (name === "list_name") {

            setList((prev) => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        } else {
            setList((prev) => {
                return {
                    ...prev,
                    [name]: checked
                }
            })
        }
    }
    console.log(createList, "d");
    const handleClick = async () => {
        if (cases) { 
            var res = await axios.put('http://localhost:5000/api/updateList', {
                ...createList,
                id
            })
            if (res.data.code) {
                console.log(res.data)
            } else {
                navigate(`/Saved/${
                    createList.list_name
                }`)
            }
        } else {
            var res = await axios.post('http://localhost:5000/api/saved', createList,
                )
            if (res.data.code) {
                alert(res.data.code)
            } else {
                navigate(`/Saved/${
                    createList.list_name
                }`)
            }
        }

    }


    return (

        <Dialog open={dialog}
            onClose={handleToClose}
            PaperProps={
                {
                    sx: {
                        width: '35%',
                        height: 'auto'
                    }
                }
        }>
            <DialogActions>
                <Button onClick={handleToClose}
                    color='inherit'
                    endIcon={<MdClear/>}></Button>
            </DialogActions>
            <DialogTitle align='center' variant='h4'>
                {
                cases ? "Edit list" : " Create new list"
            } </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography m={4}>
                       
                        <Input fullWidth        type='text' name='list_name'
                            onChange={handleChange}
                            placeholder={createList.list_name}
                            color='success'
                            />
                    </Typography>
                    <Typography m={3}>
                        
                        <Checkbox id='check' name='privte'
                            onChange={handleChange}
                            checked={createList.privte}
                            size='medium'
                            style={
                                {marginTop: -1.5}
                            }
                        />
                        <label htmlFor="check"
                            style={
                                {marginLeft: -1.5}
                        }>
                            Make it privte</label>
                    </Typography>
                    <Typography m={4}
                        align='center'>
                        <Button style={
                                {
                                    backgroundColor: "#0F730C",
                                    color: "#F9FBF9",
                                    borderRadius: 25,
                                    fontSize: 12,
                                    width: '20%'
                                }
                            }
                            onClick={handleClick}>
                            {
                            cases ? " Done " : " Create "
                        } </Button>
                    </Typography>
                </DialogContentText>
            </DialogContent>
        </Dialog>

    )
}
export default NewList
