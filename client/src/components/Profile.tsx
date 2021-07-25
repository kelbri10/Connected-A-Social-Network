import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'; 
import Box from '@material-ui/core/Box'; 


const DisplayProfile: FC = () => { 
    const user = 'Kelsey'; 

    return (
        <div style={{ width: '100%'}}>
            <h1>{user} profile</h1>

            <Button>Update Profile</Button>
            <Button>Home</Button>
        </div>
    );
}

export default DisplayProfile; 