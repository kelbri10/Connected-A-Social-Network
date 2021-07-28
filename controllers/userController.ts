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

    let existingUser = req.body; 
    console.log('user logged in')
    // res.json(existingUser);
    // let existingUser = req.body; 
    const authorizedUser = true; 

    console.log(authorizedUser);
    // return existingUser; 
    console.log(`/api/profiles/${req.body.username}`)
    res.redirect('/api/profiles/' + req.body._id);
    return authorizedUser; 
}

//GET: 
const getUserProfile = async (req: Request, res: Response) => { 
//take existing user and get profile by matching ids and return profile back to the frontend
    

    console.log('user profile found')
    // console.log(req.params._id); 

    ProfileModel.findOne({username: req.params._id})
    // .populate('profile')
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
