import React, { FC } from 'react';
import { makeStyles, Button, Grid, Card, Typography, Avatar, InputAdornment, createStyles } from '@material-ui/core'; 
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import dotenv from 'dotenv'; 
import axios from 'axios'; 



const UserProfile: FC = () => {
    // const location = useLocation(); 


    // console.log(`this is the location search: ${location.search}`); 
    const [profile, setProfile] = useState(null); 
    const [gif, setGif] = useState(); 
    // console.log('this is the response data' + response.data)
    
    useEffect(() => {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_KEY}`)
        .then((response) => {
            // console.log(response);
            // console.log(response.data.data.images.fixed_height.url); 
            setGif(response.data.data.images.fixed_height_small.url);
        })
    }, [])
    // useEffect(() => { 
    //     console.log('useeffect: you are here'); 
    //     axios.get(`/api/profiles/:${location.search.replace('?','')}`)
    //     .then((response) => { 
    //         console.log(response);
    //         setProfile(response.data); 
    //     })
    //     .catch((err) => { 
    //         console.log(err)
    //     })
    // }, [location.search]);

    const useStyles = makeStyles({
        card: {
            padding: 20
        }, 
        field: { 
            marginTop: 10, 
            marginBottom: 10
        }
    })

    const classes = useStyles(); 

    return (
        <Grid container
        spacing={3}
        alignItems='center'
        style={{minHeight: '50vh'}}
        justifyContent='center'
        direction='column'>

            <Grid item>
            <Card className={classes.card} 
            variant='outlined'
            style={{margin: '10vh', height: '50vh', width:'50vw'}}>
                <Grid item>
                <Avatar style={{ height: '100px', width:'100px', justifyContent: 'center', display: 'inline-flex'}}></Avatar>
                </Grid>

                <Typography 
                variant='h3' 
                color='textSecondary'>kelseyhugs</Typography> 

                <Typography variant='subtitle1'>Kels</Typography>
                <Typography variant='caption'>In the Universe</Typography>
                <Typography variant='subtitle1'>I can connect react to express. Ask me anything. :)</Typography>


                <img src={gif} alt='random gif from giphy'/>

                <Grid item>
                <Button
                className={classes.field}
                color='secondary'
                size='large'
                variant='outlined'>Update Profile</Button>
                </Grid>
            </Card>
            </Grid>
        </Grid>
    );
}

export default UserProfile; 