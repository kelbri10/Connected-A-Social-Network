import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, Select} from "@material-ui/core";
import Box from '@material-ui/core/Box'; 
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
    createStyles ({
        root: { 
            margin: theme.spacing(6)
        }
    })
); 

const CreateAccount: FC = () => { 
    const [newUser, setNewUser] = useState({
        username: '', 
        password: '', 
        displayName: ''
    });

    

    // const handleCreateChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    
    // }
    const classes = useStyles(); 

    return ( 
        <div style={{ width: '100%'}}>
            <h1>Connected</h1>

            <h2>It only takes a minute to get connected!</h2>

            <Box display='flex' flexDirection='column' p={1} m={1}>
                <form className={classes.root} noValidate autoComplete='off'>
                    <Box p={0.5}>
                        <TextField 
                        id='username' 
                        label='Username'
                        required 
                        />
                    </Box>

                    <Box p={0.5}>
                        <TextField 
                        id='password' 
                        label='Password' 
                        required
                        />
                    </Box>

                    <Box p={0.5}>
                        <TextField 
                        id='displayName' 
                        label='Display Name' 
                        required
                        />
                    </Box>
            
                    <Button>Submit</Button>
            

                </form>
        
            </Box>

            <p>Already have an account? Log in </p>
        </div>
    )

}

export default CreateAccount; 