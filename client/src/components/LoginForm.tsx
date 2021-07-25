import React,  { FC } from 'react'; 
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {Button, TextField} from '@material-ui/core'; 


const useStyles = makeStyles((theme: Theme) =>
    createStyles ({
        root: { 
            margin: theme.spacing(6)
        }
    })
); 

const LoginForm: FC = () => {
    const [username, setUsername] = React.useState(''); 
    const [password, setPassword] = React.useState(''); 

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setUsername(event.target.value); 
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const classes = useStyles(); 
    
    return (
        <div>
            <h1>Login Form</h1>

            <form className={classes.root} noValidate autoComplete='off'>
                <div>
                    <TextField 
                        id='username' 
                        label='Username' 
                        value={username}
                        required
                        onChange={handleUsernameChange}/>
                </div>
                <div>
                    <TextField 
                        id='password' 
                        label='Password' 
                        value={password}
                        required
                        onChange={handlePasswordChange}/>
                </div>
                
                <div>
                    <Button> Submit </Button>
                </div>

            </form >

            <p>Don't already have an account? Create one here!</p>
        </div>
    )}


export default LoginForm; 