import express, {Request, Response} from 'express'; 
import path from 'path';
import isAuthenticated from '../config/middleware/isAuthenticated';
import apiRouter from './api-routes';
const router = express.Router(); 
//html-routes 

// //live
// htmlRouter.get('/', (req:express.Request , res: express.Response) => { 
//     res.send('Express server is live'); 
// })
router.use("/api", apiRouter)

// /login
router.get('/*', (req: Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})


// htmlRouter.get('/home', (req: Request, res: Response) => { 
//     res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// 


export default router; 