import UserProfile, { User } from '../model/user.model'; 

// POST /user - create a new user 
const addNewUser = (req: Request, res: Response): Promise<void> => { 
    const body: User = req.body; 
    
    const newUser: User = UserProfile.create({
        username: body.username, 
        name: body.name, 
        email: body.email, 
        location: body.location
    });

    newUser.then(addedUser => { 
        addedUser.save(); 
    }).catch(err =>
        console.log(err));
}
//api/user 
// GET /user/:userID - gets specific user profile based on authetication
//api/user/

export default { addNewUser }; 