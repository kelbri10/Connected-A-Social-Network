import {Request, Response, NextFunction} from "express";
import UserModel from "../model/user.model";
import ProfileModel from "../model/profile.model";
//create new user 
//POST 
//UserModel.create({})
const createNewUser = (req: Request, res: Response, next: NextFunction) => { 
    let newUserObj = req.body;

    const newUser = new UserModel(newUserObj); 

    newUser.save((err) => { 
        if(err) throw err; 
    });

    const newProfile = new ProfileModel({username: newUser._id }); 
    newProfile.save((err) => { 
        if(err) throw err; 
    })
    // return newUserProfile.save()
    // .then(profile => { 
    //     console.log('new user added'); 
    //     return res.json({
    //         username: newUser.username, 
    //         email: newUser.email,
    //         displayName: newUser.displayName
    //     }); 
    // })
    // .catch (err => { 
    //     console.log('unable to add new user'); 
    // })
    
}

const createNewProfile = (req: Request, res: Response, next: NextFunction) => { 
    let newProfileObj = req.body; 

    const newProfile = new ProfileModel(newProfileObj); 

    newProfile.save((err) => { 
        if(err) throw err; 
    })
}

//GET 
//requires passport.authenticate
//UserModel.find({}), UserModel.findById({})
const findExistingUser = (req: Request, res: Response, next: NextFunction) => { 
    let existingUser = req.body; 

    return res.json({ 
        email: existingUser.email, 
        username: existingUser.username 
    })
}
//GET: 
const getUserProfile = (req: Request, res: Response, next: NextFunction) => { 
//take existing user and get profile by matching ids and return profile back to the frontend
}

//update existing user 
//PUT 
//UserModel.findOneAndUpdate({})
const updateExistingUser = (req: Request, res: Response, next: NextFunction) => { 

}

//delete existing user 
//DELETE 
//UserModel.deleteOne({})
const deleteExistingUser = (req: Request, res: Response, next: NextFunction) => { 

}

export default { createNewUser, findExistingUser, updateExistingUser, deleteExistingUser, createNewProfile, getUserProfile }; 
