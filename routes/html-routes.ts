import express, {Request, Response} from 'express'; 
const htmlRouter = express.Router(); 
//html-routes 

// /login
htmlRouter.get('/login', (req: Request, res: Response) => { 
    res.send('welcome to login page');
})

// /createAccount
htmlRouter.get('/createAccount', (req: Request, res: Response) => { 
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