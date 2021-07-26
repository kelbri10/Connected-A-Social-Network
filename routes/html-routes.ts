import express, {Request, Response} from 'express'; 
const htmlRouter = express.Router(); 
//html-routes 

//live
htmlRouter.get('/', (req:express.Request , res: express.Response) => { 
    res.send('Express server is live'); 
})

// /login
htmlRouter.get('/accounts/login', (req: Request, res: Response) => { 
    res.send('welcome to login page');
})

// /createAccount
htmlRouter.get('/accounts/signup', (req: Request, res: Response) => { 
    res.send('create an account here')
})

// /home 
htmlRouter.get('/home', (req: Request, res: Response) => { 
    res.send('this is your home feed'); 
})

// /profile
htmlRouter.get('/profile', (req: Request, res: Response) => { 
    res.send('this is your profile page'); 
})

export default htmlRouter; 