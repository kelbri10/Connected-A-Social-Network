import React, { FC } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import {Button} from '@material-ui/core'; 
import { useState } from "react";

import AccountDetails from "./AccountDetails";
import ProfileDetails from "./ProfileDetails";
import Finish from "./Finish";


const getSteps = () => { 
    return ['Enter Account Details', 'Enter Profile Details', 'Finish']
}

const getStepContent = (step: number) => { 
    switch(step) { 
        case 0: 
            return <AccountDetails />; 
        case 1: 
            return <ProfileDetails />; 
        case 2: 
            return <Finish />
        default: 
            return 'This step does not exist'; 
    }
}

const UserForm = () => { 
    const [activeStep, setActiveStep] = useState(0); 
    const steps = getSteps(); 
}