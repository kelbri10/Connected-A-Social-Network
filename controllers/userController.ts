import {Request, Response, NextFunction} from "express";
import UserModel from "../model/user.model";
// import passport from '../config/passport';

//create new user 
//POST 
//UserModel.create({})
const createNewUser = (req: Request, res: Response, next: NextFunction) => { 
    let newUser = req.body;

    const newUserProfile = new UserModel(newUser); 

    return newUserProfile.save()
    .then(profile => { 
        console.log('new user added'); 
        return res.json(); 
    })
    .catch (err => { 
        console.log('unable to add new user'); 
    })
    
}

//GET 
//requires passport.authenticate
//UserModel.find({}), UserModel.findById({})
const findExistingUser = (req: Request, res: Response, next: NextFunction) => { 
    let existingUser = req.body; 

    UserModel.findOne({username: existingUser.username, password: existingUser.password})
    .then(user => { 
        console.log('user found'); 
    })
    .catch(err => { 
        console.log('no user found, try again')
    });
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
