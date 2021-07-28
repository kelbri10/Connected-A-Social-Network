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
    console.log('loginuser: user logged in')
    
    
   
    console.log(`/api/profiles/${existingUser.username}`)
    res.redirect('/api/profiles/' + existingUser.username);
    
}

//GET: 
const getUserProfile = async (req: Request, res: Response) => { 
//take existing user and get profile by matching ids and return profile back to the frontend

    console.log('getuser: user profile found')
    console.log('This is the params' + ' ' + req.params.user.replace(':', ''));
    
    UserModel.findOne({username: req.params.user})
    .populate('profile')
    .exec((err, user) => {
        if (err) console.log(err);  
        res.json()
    })
    

    // ProfileModel.findOne({username: req.params.user})
    // // .populate('profile')
    // .then((profile) =>{res.json(profile)})
    // .catch((err)=>{res.json(err)}); 
    
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
