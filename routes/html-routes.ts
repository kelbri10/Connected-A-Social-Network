import express, {Request, Response} from 'express'; 
import path from 'path';
import isAuthenticated from '../config/middleware/isAuthenticated';
const htmlRouter = express.Router(); 
//html-routes 

// //live
// htmlRouter.get('/', (req:express.Request , res: express.Response) => { 
//     res.send('Express server is live'); 
// })

// /login
htmlRouter.get('/', (req: Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})


if(isAuthenticated){ 
    res.redirect('/')
}
export default htmlRouter; 