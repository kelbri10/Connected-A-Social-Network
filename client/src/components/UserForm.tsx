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

    //takes user to next step in form
    const handleNext = () => { 
        setActiveStep((prevStep) => prevStep + 1 ); 
    }

    //takes user to prev step in form 
    const handleBack = () => { 
        setActiveStep((prevStep) => prevStep - 1); 
    }

    return (
        <div>
            <Stepper activeStep={activeStep}>
                {/* maps array from getSteps to top of stepper */}
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/* conditional statement that checks whether the stepper is still ongoing or completed */}
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Button>Go to Profile</Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}

                        <div>
                            <Button
                            disabled={activeStep===0}
                            onClick={handleBack}>
                                Back
                            </Button>

                            <Button
                            onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>

                    </div>
                )} 
            </div>
        </div>
    )
}

export default UserForm; 