import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'; 
import Box from '@material-ui/core/Box'; 
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import axios from 'axios'; 

const UserProfile: FC = () => {
    const location = useLocation(); 


    console.log(`this is the location search: ${location.search}`); 
    const [profile, setProfile] = useState(null); 

    
    useEffect(() => { 
        console.log('useeffect: you are here'); 
        axios.get(`/api/profiles/:${location.search}`)
        .then((response) => { 
            console.log(response);
            setProfile(response.data);
        })
        .catch((err) => { 
            console.log(err)
        })
    }, []);

    return (
        <div style={{ width: '100%'}}>
            <h1>You see this when you successfully login</h1>

{/*             
            <h1>{props.displayName}</h1>
            <h2>{props.username}</h2>
            <h2>{props.location}</h2> */}
            {/* <h1>{profile.displayName} profile</h1>

            <div className='profile-information'>
                <p>{profile.displayName}</p>
                <p>@{profile.username}</p>
                <p>{profile.location}</p>
            </div>  */}

            {/* insert table here to display connections, albums, home page*/}
            
            <Button>Update Profile</Button>
            <Button>Home</Button>
        </div>
    );
}

export default UserProfile; 