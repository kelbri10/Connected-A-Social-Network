import React, { FC } from "react";
import { makeStyles, Button, TextField, Typography, Grid, InputAdornment} from "@material-ui/core";
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom'; 
import {AccountCircle, Lock, Email} from '@material-ui/icons'
import axios from "axios";


const SignUp : FC = () => { 

    //useState hook to track changes to user information
    const [newUser, setNewUser] = useState({
        username: '', 
        password: '', 
        email: '',
    });

    const history = useHistory();

    // //changes the value of userobj when user types in input box
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const {name, value} = event.target; 

        setNewUser(user => { 
            return { 
                ...user, [name]: value
            }
        })
    }

    //on submit information is sent to db to be added as a new user 
    //default profile info is added as set by the db model
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => { 
        event.preventDefault(); 
        console.log(newUser); 

        axios.post('/api/accounts/signup', {
            username: newUser.username, 
            password: newUser.password,
            email: newUser.email 
            
        }).then((response) => { 
            // console.log(response)
            history.push({
                pathname: '/login', 
                state: { 
                    update: true,
                }
            })
        }).catch((err) => { 
            console.log(err); 
        })
    }

    //renders additional margin formatting to form fields 
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
        direction='column'>
            <Grid item>
            <Typography
            variant='h2'
            color='secondary'>Connected</Typography>
            </Grid>

            <Grid item>
            <Typography 
            variant='h6'
            color='textSecondary'>It only takes a minute to get connected!</Typography>
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
                        value={newUser.username}
                        required 
                        onChange={handleChange}
                        />
                    </Grid>

                    <Grid item>
                        <TextField 
                        className={classes.field}
                        variant='outlined'
                        color='secondary'
                        id='email' 
                        name='email'
                        label='Email'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Email />
                                </InputAdornment>
                            )
                        }} 
                        value={newUser.email}
                        required 
                        onChange={handleChange}
                        />
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
                        value={newUser.password}
                        required
                        onChange={handleChange}
                        />
                    </Grid>
            
                    <Grid item>
                        <Button 
                        className={classes.field}
                        color='secondary'
                        size='large'
                        variant='outlined'
                        onClick={handleSubmit}>
                            Submit
                        </Button> 
                    </Grid>

                </form>
            </Grid>

            <Grid item>
                <Typography
                variant='h6'>Already have an account? <Link to = '/'>Login!</Link></Typography>
            </Grid>
        
        </Grid>
    )

}

export default SignUp; 