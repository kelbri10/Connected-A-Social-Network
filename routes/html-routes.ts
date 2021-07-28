import express, {Request, Response} from 'express'; 
import path from 'path';
import isAuthenticated from '../config/middleware/isAuthenticated';

const router = express.Router(); 
//html-routes 

// //live
// htmlRouter.get('/', (req:express.Request , res: express.Response) => { 
//     res.send('Express server is live'); 
// })


// /login
router.get('/*', (req: Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
})


// htmlRouter.get('/home', (req: Request, res: Response) => { 
//     res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// 


export default router; 