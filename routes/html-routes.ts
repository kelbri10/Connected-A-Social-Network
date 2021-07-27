import express, {Request, Response} from 'express'; 
import path from 'path';
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

// /createAccount
htmlRouter.get('/accounts/signup', (req: Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// /home 
htmlRouter.get('/home', (req: Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// /profile
htmlRouter.get('/profile', (req: Request, res: Response) => { 
    res.sendFile(path.join(__dirname, '../client/build/index.html')); 
})

export default htmlRouter; 