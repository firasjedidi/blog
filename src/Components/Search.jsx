import React from 'react'
import {MdOutlineSearch} from 'react-icons/md'
import CustmInput from './CoustemInput/CustmInput'
import {Grid, Typography, ClickAwayListener, Divider} from '@mui/material'
import {MdBookmark, MdOutlineBookmarkAdd} from "react-icons/md";
export const Search = ({handleChange,open,setOpen,data}) => {  
  return (
    <div>
        <Grid align="center" >
                    <Typography marginTop={"15%"}>
                        <CustmInput type='text' name="search"
                            icon={<MdOutlineSearch/>}
                            onChange={handleChange}
                            placeholder="search"/>
                    </Typography>
                    <Typography
                        marginTop={"-6%"}
                        boxShadow="6"
                        bgcolor={"white"}
                        borderRadius='2px'
                        width={"80%"}
                        height={"100%"}
                     >
                        {
                        open ? <ClickAwayListener onClickAway={
                            (e) => setOpen(false)
                        }>
                           
                            <Typography m={2}
                                align="left"
                               
                                >
                                <Typography  display={'flex'} flexDirection='column'>
                                <p style={{fontSize:'13px',marginTop:25}}>PEPOLE</p>
                                <Divider/>
                                {data.map(e=>(
                                    <div>
                                        <span style={{fontSize:'14px',marginTop:12}}>{e.username}</span>
                                    </div>
                                ))}
                                </Typography>
                                <Typography>
                                <p style={{fontSize:'13px',marginTop:10}}>PUBLICATIONS</p> 
                                 <Divider/>
                                {data.map(e=>(
                                    <div>
                                        <span style={{fontSize:'14px',marginTop:10}}>{e.namefirst}</span>
                                    </div>
                                ))}
                              </Typography>
                            </Typography>

                        </ClickAwayListener> : setOpen(false)
                    } </Typography>
            </Grid>
    </div>
  )
}
