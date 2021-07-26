import React,  { FC } from 'react'; 
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core'; 
import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box'; 
import axios from 'axios'; 


const useStyles = makeStyles((theme: Theme) =>
    createStyles ({
        root: { 
            margin: theme.spacing(6)
        }
    })
); 

const LoginForm: FC = () => {
    const [existingUser, setExistingUser] = useState({
        username: '', 
        password: ''
    });  

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const {name, value} = event.target; 

        setExistingUser(user => { 
            return {
                ...user, [name]: value
            }
        })

    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => { 
        //prevents user from resubmitting once button clicked
        event.preventDefault(); 
        //takes form data and sends to getEExistingUser to autheticate user 
        console.log(existingUser); 
        //axios get request to express server
        axios.get('/api/accounts/login', {
            params: {
                username: existingUser.username,
                password: existingUser.password 
            }
        }).then((response) => { 
            console.log(response); 
        }).catch((err) => { 
            console.log(err); 
        });
    }
    

    const classes = useStyles(); 
    
    return (
        <div>
            <h1>Login Form</h1>

            <form className={classes.root} noValidate autoComplete='off'>
                <div>
                    <TextField 
                        id='username' 
                        name='username'
                        label='Username' 
                        value={existingUser.username}
                        required
                        onChange={handleChange}/>
                </div>
                <div>
                    <TextField 
                        id='password' 
                        name='password'
                        label='Password' 
                        value={existingUser.password}
                        required
                        onChange={handleChange}/>
                </div>
                
                <div>
                    <Button onClick={handleSubmit}> Submit </Button>
                </div>

            </form >

            <p>Don't already have an account? Create one here!</p>
        </div>
    )}


export default LoginForm; 