import express, {Request, Response} from 'express'; 
import passport from '../config/passport'; 
import userController from '../controllers/userController'; 

const apiRouter = express.Router(); 

//POST: creates new user 
apiRouter.post('/accounts/signup', userController.createNewUser); 

//GET: gets existing user and user profile after validation process 
apiRouter.get('/accounts/login', passport.authenticate('local-user', {successRedirect: '/profile', failureRedirect: '/login'})/*userController.loginUser*/);

// apiRouter.get('/profile/:user', (req, res, next) => { 
//     passport.authenticate('local-user', (err, user, info) => { 
//         if(err) {return next(err)}

//         if(!user) {return res.redirect('/accounts/login'); }

//         req.logIn(user, (err) => {
//             if(err) { return next(err); }
            
//             return res.redirect('/profile'); 
//         });
//     }) 
// }, userController.loginUser); 
// //PUT: update existing user
// apiRouter.put('/user/:id', userController.updateExistingUser)

// //DELETE: delete existing user 
// apiRouter.delete('/user/:id', userController.deleteExistingUser)
export default apiRouter; 