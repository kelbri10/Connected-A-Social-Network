import express, {Request, Response} from 'express'; 
import userController from '../controllers/userController'; 
import passport from '../config/passport'; 

const apiRouter = express.Router(); 

//POST: create new user 
apiRouter.post('/user', userController.createNewUser); 

//GET: read existing user 
apiRouter.get('/login', passport.authenticate('local-user'), userController.findExistingUser); 

//PUT: update existing user
apiRouter.put('/user/:id', userController.updateExistingUser)

//DELETE: delete existing user 
apiRouter.delete('/user/:id', userController.deleteExistingUser)
export default apiRouter; 