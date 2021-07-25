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

//PUT: update existing user

//DELETE: delete existing user 

export default apiRouter; 