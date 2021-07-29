import React,  { FC } from 'react'; 
import {Button, makeStyles, TextField, Typography,  Grid, InputAdornment} from '@material-ui/core'; 
import { useState} from 'react';
import { Link, useHistory} from 'react-router-dom'; 
import {AccountCircle, Lock} from '@material-ui/icons';
import axios from 'axios'; 


const LoginForm: FC = () => {
    const [existingUser, setExistingUser] = useState({
        username: '', 
        password: ''
    });  

    const history = useHistory(); 

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
        axios.post('/api/accounts/login', {
           
            username: existingUser.username,
            password: existingUser.password 
            
        }).then((response) => { 
            console.log(response); 
            if(response.data.username){
                console.log('isAuth:  you can be here');
                console.log(response.data.username)
                history.push({
                    pathname:'/profile',
                    search: `${response.data.username}`, 
                    state: {
                        update: true,
                    }
                });
                // return isAuth; 
            } 
        }).catch((err) => { 
            console.log(err); 
        });
    }

    const useStyles = makeStyles({
        field: { 
            marginTop: 10, 
            marginBottom: 10
        }
    })
    
    const classes = useStyles(); 

    return (
        <Grid container
        spacing={0}
        alignItems='center'
        style={{minHeight: '100vh'}}
        justifyContent='center'
        direction='column'
        >

            <Grid item>
            <Typography 
            variant='h1' 
            color='secondary'>Login</Typography>
            </Grid>

            <Grid item>
            <Typography 
            variant='h6'
            color='textSecondary'>Welcome back! Let's get Connected!</Typography>
            </Grid>

            <Grid item>
                <form 
                noValidate 
                autoComplete='off'>
                    <Grid item>
                    <TextField 
                        className={classes.field}
                        variant='outlined'
                        color='secondary'
                        id='username' 
                        name='username'
                        label='Username'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <AccountCircle />
                                </InputAdornment>
                            )
                        }} 
                        value={existingUser.username}
                        required
                        onChange={handleChange}/>
                    </Grid>

                    <Grid item>
                    <TextField 
                        className={classes.field}
                        variant='outlined'
                        color='secondary'
                        id='password' 
                        name='password'
                        label='Password'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Lock />
                                </InputAdornment>
                            )
                        }}  
                        value={existingUser.password}
                        required
                        onChange={handleChange}/>
                    </Grid>

                    <Grid item>
                    <Button
                    className={classes.field}
                    color='secondary'
                    size='large'
                    variant='outlined'
                    onClick={handleSubmit}> 
                    Submit </Button>
                    </Grid>

                </form >
            </Grid>

            <Grid item>
            <Typography 
            variant='h6'>
            Don't already have an account? Create one <Link to = '/accounts/signup'>here</Link>!</Typography>
            </Grid>

        </Grid>
    )}


export default LoginForm; 