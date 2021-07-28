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

    const newProfile = new ProfileModel(); 

    newProfile.save((err) => { 
        if(err) throw err; 
    })

    newUser.profile.push(newProfile); 

    console.log('user added'); 
}


//GET 
//requires passport.authenticate
//UserModel.find({}), UserModel.findById({})
const loginUser = (req: Request, res: Response) => {  

    interface UserData { 
        email: string; 
        username: string; 
        _id: string; 
    }
    //defines the obj for profile param to expect 
    interface UserProfile { 
    displayName: string; 
    bio: string; 
    location: string; 
    posts: string[];
    }


    console.log('user logged in')

    // UserModel.findOne({username: existingUser.username})
    // .populate('profile')
    // .then((profile) =>{res.json(profile)})
    // .catch((err)=>{res.json(err)}); 
    let existingUser = req.body; 
    return res.json(existingUser); 
}

//GET: 
const getUserProfile = async (req: Request, res: Response) => { 
//take existing user and get profile by matching ids and return profile back to the frontend
    let existingUser = req.body;

    console.log('user profile found')

    UserModel.findOne({username: existingUser.username})
    .populate('profile')
    .then((profile) =>{res.json(profile)})
    .catch((err)=>{res.json(err)}); 
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

export default { createNewUser, loginUser, updateExistingUser, deleteExistingUser, getUserProfile }; 
