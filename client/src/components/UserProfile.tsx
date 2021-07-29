import React, { FC } from 'react';
import { makeStyles, Button, Grid, Card, Typography, Avatar, InputAdornment, createStyles } from '@material-ui/core'; 
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import axios from 'axios'; 



const UserProfile: FC = () => {
    const location = useLocation(); 


    console.log(`this is the location search: ${location.search}`); 
    const [profile, setProfile] = useState(null); 

    // console.log('this is the response data' + response.data)
    
    useEffect(() => { 
        console.log('useeffect: you are here'); 
        axios.get(`/api/profiles/:${location.search.replace('?','')}`)
        .then((response) => { 
            console.log(response);
            setProfile(response.data); 
        })
        .catch((err) => { 
            console.log(err)
        })
    }, [location.search]);

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
        spacing={0}
        alignItems='center'
        style={{minHeight: '50vh'}}
        justifyContent='center'
        direction='column'>

            <Grid item>
            <Card className={classes.card} variant='outlined'>
                <Grid item>
                <Avatar style={{ height: '100px', width:'100px', justifyContent: 'center', display: 'inline-flex'}}>U</Avatar>
                </Grid>

                <Typography 
                variant='h3' 
                color='textSecondary'>Username</Typography> 

                <Typography variant='subtitle1'>Display Name</Typography>
                <Typography variant='caption'>Location</Typography>
                <Typography variant='subtitle1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>


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