import {Request, Response, NextFunction} from "express";
import UserModel from "../model/user.model";

//create new user 
//POST 
//UserModel.create({})
const createNewUser = (req: Request, res: Response, next: NextFunction) => { 
    let newUser = req.body;

    const newUserProfile = new UserModel(newUser); 

    newUserProfile.save((err) => { 
        if(err) throw err; 
    });
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

export default { createNewUser, findExistingUser, updateExistingUser, deleteExistingUser }; 
