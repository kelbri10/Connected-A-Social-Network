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
}


//GET 
//requires passport.authenticate
//UserModel.find({}), UserModel.findById({})
const loginUser = (req: Request, res: Response, next: NextFunction) => {  

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

    let existingUser = req.body;

    UserModel.findOne({username: existingUser.username})
    .populate('profile')
    .then((profile) =>{res.json(profile)})
    .catch((err)=>{res.json(err)}); 

    // UserModel.findOne({username: existingUser.username}, (err: Error
        
    //     , data: UserData) => { 
    //     if (err){ 
    //         throw err
    //     } else {

    //         let username_id = data._id; 
            
    //         ProfileModel.findOne({username: username_id}, (err: Error, profile: UserProfile) => { 
    //             if (err) { 
    //                 throw err
    //             } else { 
    //                 return res.json({
    //                     username: existingUser.username, 
    //                     displayName: profile.displayName, 
    //                     bio: profile.bio, 
    //                     location: profile.location
    //                 })
    //             }}
    //         ) 
    //     }
    // })
}

//GET: 
const getUserProfile = async (req: Request, res: Response, next: NextFunction) => { 
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

export default { createNewUser, loginUser, updateExistingUser, deleteExistingUser, getUserProfile }; 
