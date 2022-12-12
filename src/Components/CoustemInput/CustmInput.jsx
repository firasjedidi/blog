import React from "react";
import { Input,Grid ,Icon} from "@mui/material";


export default function CustmInput(props) {
  const {type,name,onChange,icon}=props
  return (
    <div>
        <Grid m={4}  >
            <Input fullWidth 
              color="success"
              type={type} name={name}
              onChange={onChange}
              placeholder={name}
              startAdornment={
                <Icon children={icon}
                  fontSize='medium'
                  sx={{mr:2,ml:1}}  
                /> 
              }   
            />
        </Grid>
    </div>
  )
}
