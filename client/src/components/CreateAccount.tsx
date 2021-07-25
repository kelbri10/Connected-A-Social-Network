import React, { FC } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button, TextField, Select} from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles ({
        root: { 
            margin: theme.spacing(6)
        }
    })
); 

const CreateAccount: FC = () => { 
    // const [userObj, setUserObj] = React.useState({
    //     username: '', 
    //     password: '', 
    //     displayName: '',
    //     email: '',
    //     location: '', 
    // }); 

    // const handleCreateChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    
    // }
    const classes = useStyles(); 

    return ( 
        <div>
            <h1>Connected</h1>

            <h2>It only takes a minute to get connected!</h2>

            <form className={classes.root} noValidate autoComplete='off'>

                <div>
                    <TextField 
                        id='username' 
                        label='Username'
                
                        required 
                    />
                </div>
                <div>
                    <TextField 
                        id='password' 
                        label='Password' 
                    
                        required
                    />
                </div>
                <div>
                    <TextField 
                        id='displayName' 
                        label='Display Name' 
                        
                        required
                    />
                </div>
                <div>
                    <TextField 
                        id='email' 
                        label='Email' 
                    
                        required
                        />
                </div>
                <div>
                    <TextField 
                        id='location' 
                        label='Location' 
                    
                    />
                </div>

                <div>
                    <Button>Submit</Button>
                </div>

            </form>
        </div>
    )

}

export default CreateAccount; 