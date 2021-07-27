import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'; 
import Box from '@material-ui/core/Box'; 
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';

const UserProfile: FC = () => {

    

    return (
        <div style={{ width: '100%'}}>
            <h1>You see this when you successfully login</h1>
            {/* <h1>{user.displayName} profile</h1>

            <div className='profile-information'>
                <p>{user.displayName}</p>
                <p>@{user.username}</p>
                <p>{user.location}</p>
            </div>

            {/* insert table here to display connections, albums, home page*/}
            
            <Button>Update Profile</Button>
            <Button>Home</Button>
        </div>
    );
}

export default UserProfile; 