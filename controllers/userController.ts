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
}

// const createNewProfile = (req: Request, res: Response, next: NextFunction) => { 
//     let newProfileObj = req.body; 

//     const newProfile = new ProfileModel(newProfileObj); 

//     newProfile.save((err) => { 
//         if(err) throw err; 
//     })
// }

//GET 
//requires passport.authenticate
//UserModel.find({}), UserModel.findById({})
const getExistingUser = (req: Request, res: Response, next: NextFunction) => {  

    interface UserData { 
        email: string; 
        username: string; 
        _id: string; 
    }

    let existingUser = req.body;

    UserModel.findOne({username: existingUser.username}, (err: Error, data: UserData) => { 
        if (err){ 
            throw err
        } else {
            return res.json(data._id)
        }
    })
}

//GET: 
const getUserProfile = async (req: Request, res: Response, next: NextFunction) => { 
//take existing user and get profile by matching ids and return profile back to the frontend

    //defines the obj for profile param to expect 
    interface UserProfile { 
        displayName: string; 
        bio: string; 
        location: string; 
        posts: string[];
    }

    ProfileModel.findOne({username: req.params.user_id}, (err: Error, profile: UserProfile) => { 
        if (err) { 
            throw err
        } else { 
            return res.json({
                displayName: profile.displayName, 
                bio: profile.bio, 
                location: profile.location
            })
        }}
    ) 
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

export default { createNewUser, getExistingUser, updateExistingUser, deleteExistingUser, getUserProfile }; 
