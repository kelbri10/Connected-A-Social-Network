import {Request, Response, NextFunction} from "express";
import UserModel from "../model/user.model";

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

export default { createNewUser }; 
//read existing user 
//GET 
//requires passport.authenticate
//UserModel.find({}), UserModel.findById({})

//update existing user 
//PUT 
//UserModel.findOneAndUpdate({})

//delete existing user 
//DELETE 
//UserModel.deleteOne({})