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

const AccountDetails : FC = () => { 
    const [newUser, setNewUser] = useState({
        username: '', 
        password: '', 
        email: '',
    });


    //changes the value of userobj when user types in input box
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const {name, value} = event.target; 

        setNewUser(user => { 
            return { 
                ...user, [name]: value
            }
        })
    }

    //submits userobj through axios post request to api
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => { 
        event.preventDefault(); 
        console.log(newUser); 

        axios.post('/api/accounts/signup', {
            username: newUser.username, 
            password: newUser.password,
            email: newUser.email, 
            
        }).then((response) => { 
            console.log(response)
        }).catch((err) => { 
            console.log(err); 
        })
    }

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
                        name='username'
                        label='Username'
                        value={newUser.username}
                        required 
                        onChange={handleChange}
                        />
                    </Box>

                    <Box p={0.5}>
                        <TextField 
                        id='password' 
                        name='password'
                        label='Password' 
                        value={newUser.password}
                        required
                        onChange={handleChange}
                        />
                    </Box>

                    <Box p={0.5}>
                        <TextField 
                        id='email' 
                        name='email'
                        label='Email'
                        value={newUser.email}
                        required 
                        onChange={handleChange}
                        />
                    </Box>
            
                    <Button onClick={handleSubmit}>Submit</Button>
            

                </form>
        
            </Box>

            <p>Already have an account? Log in </p>
        </div>
    )

}

export default AccountDetails; 