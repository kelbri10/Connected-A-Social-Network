import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'; 
import Box from '@material-ui/core/Box'; 


const DisplayProfile: FC = () => { 
    const user = 'Kelsey'; 

    return (
        <div style={{ width: '100%'}}>
            <h1>{user}'s profile</h1>

            <div className='profile-information'>
                <p>Kelsey</p>
                <p>@kelseyhugs</p>
                <p>Baltimore, MD</p>
            </div>

            {/* insert table here to display connections, albums, home page*/}

            <Button>Update Profile</Button>
            <Button>Home</Button>
        </div>
    );
}

export default DisplayProfile; 