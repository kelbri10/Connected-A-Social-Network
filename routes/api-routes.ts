// import express from 'express'; 

// const router = express.Router(); 

// // // POST method for adding new users to app
// // router.post('/api/user', addNewUser); 

// // module.exports = router; 
import express, {Request, Response} from 'express'; 
import userController from '../controllers/userController'; 
const apiRouter = express.Router(); 

//POST: create new user 
apiRouter.post('/newUser', userController.createNewUser); 

//GET: read existing user 
apiRouter.get('/current/user/:id', userController.findExistingUser); 

//PUT: update existing user
apiRouter.put('/update/user/:id', userController.updateExistingUser)

//DELETE: delete existing user 
apiRouter.delete('/delete/user/:id', userController.deleteExistingUser)
export default apiRouter; 