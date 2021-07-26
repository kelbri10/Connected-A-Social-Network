import express, {Request, Response} from 'express'; 
import passport from '../config/passport'; 
import userController from '../controllers/userController'; 

const apiRouter = express.Router(); 

//POST: create new user 
apiRouter.post('/accounts/signup', userController.createNewUser); 

//GET: read existing user 
apiRouter.get('/accounts/login', passport.authenticate('local-user'), userController.findExistingUser); 

//PUT: update existing user
apiRouter.put('/user/:id', userController.updateExistingUser)

//DELETE: delete existing user 
apiRouter.delete('/user/:id', userController.deleteExistingUser)
export default apiRouter; 