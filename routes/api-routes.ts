import express, {Request, Response} from 'express'; 
import passport from '../config/passport'; 
import userController from '../controllers/userController'; 

const apiRouter = express.Router(); 

//POST: creates new user 
apiRouter.post('/accounts/signup', userController.createNewUser); 

//POST gets existing user and user profile after validation process 
apiRouter.post('/accounts/login', passport.authenticate('local-user'), userController.loginUser, (req, res) =>{
    console.log('you made it here');
    // res.redirect(307, '/profiles/user')
});


//GET user profile
apiRouter.get('/profiles/user', userController.getUserProfile);

// //PUT: update existing user
// apiRouter.put('/user/:id', userController.updateExistingUser)

// //DELETE: delete existing user 
// apiRouter.delete('/user/:id', userController.deleteExistingUser)
export default apiRouter; 