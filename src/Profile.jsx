import React from 'react'
import HomeSideNavBar from './Components/CoustemNav/HomeSideNavBar'
import { useNavigate } from 'react-router-dom'
import { Grid,Typography,IconButton,Divider,Button} from '@mui/material'
import {MdContentCopy} from 'react-icons/md'
import SearchBar from './Components/CoustemNav/SearchBar'
export default function Profile() {
  const navigate=useNavigate();
  return (
    <div>
        <div>
          <HomeSideNavBar/>
        </div>
        <Grid width={'50%'}
                marginLeft={30}
                p={5}>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography m={3}>
                       Name of  user
                    </Typography>
                    <Typography m={3}>
                      <a  target="_blank" title='copy link to profile'>
                        <IconButton 
                          children={<MdContentCopy/>}
                        />  
                      </a>
                    </Typography>
                </Grid>
                <Divider/>
                <Grid> {/* map */}
                    <Grid p={5}
                        marginTop={6}
                        boxShadow={1}
                        backgroundColor="#FAFAFA"
                        borderRadius={2}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <Typography fontSize={24}>Reading list</Typography>
                        <Typography>
                            <Button onClick={e=> navigate(`/${"me"}/Saved/${"reading"}`)}>
                                View list
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
            <div>
              <SearchBar profile={true} />
            </div>
    </div>
  )
}
