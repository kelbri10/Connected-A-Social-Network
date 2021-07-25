const express = require('express'); 
import UserProfile from '../model/user.model'; 

const router = express.Router(); 

// POST method for adding new users to app
router.post('/api/user', (req: Request, res: Response) =>{ 
    const newUser = UserProfile.create({
        username: req.body.username, 
        name: req.body.name, 
        email: req.body.email, 
        location: req.body.location
    });

    newUser.then(addedUser => { 
        addedUser.save(); 
    }).catch(err =>
        console.log(err));

})

module.exports = router; 