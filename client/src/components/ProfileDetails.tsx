import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, Select} from "@material-ui/core";
import Box from '@material-ui/core/Box'; 
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles ({
        root: { 
            margin: theme.spacing(6)
        }
    })
); 

const ProfileDetails: FC = () => { 
    const [newProfile, setNewProfile] = useState({
        displayName: '', 
        location: '', 
        bio: ''
    }); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target; 
        
        setNewProfile(profile => { 
            return {
                ...profile, [name]: value
            }
        })
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => { 
        event.preventDefault(); 
        console.log(newProfile); 

        axios.post('/api/profile/signup', {
            displayName: newProfile.displayName, 
            location: newProfile.location,
            bio: newProfile.bio
            
        }).then((response) => { 
            console.log(response)
        }).catch((err) => { 
            console.log(err); 
        })
    }

    const classes = useStyles(); 

    return (
        <div>
            <h1>Tell us a bit about yourself</h1>

            <Box display='flex' flexDirection='column' p={1} m={1}>
                <form className={classes.root} noValidate autoComplete='off'>
                    <Box p={0.5}>
                        <TextField 
                        id='displayName' 
                        name='displayName'
                        label='Display Name'
                        value={newProfile.displayName}
                        required 
                        onChange={handleChange}
                        />
                    </Box>

                    <Box p={0.5}>
                        <TextField 
                        id='bio' 
                        name='bio'
                        label='Bio' 
                        value={newProfile.bio}
                        required
                        onChange={handleChange}
                        />
                    </Box>

                    <Box p={0.5}>
                        <TextField 
                        id='location' 
                        name='location'
                        label='Location'
                        value={newProfile.location}
                        required 
                        onChange={handleChange}
                        />
                    </Box>
            
                    <Button onClick={handleSubmit}>Submit</Button>
            

                </form>
            
            </Box>
        </div> 
    )
    
}

export default ProfileDetails; 