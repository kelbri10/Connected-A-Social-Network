import express from 'express'; 


const router = express.Router(); 


//create new user profile
router.post('/user', (req, res)=> { 
    let User = { 
        name: 'Kelsey',
        email: 'kelbri10@gmail.com',
        location: 'Baltimore'
    }
    res.send(User); 
});

//get existing user profile
router.get('/home', (req, res) =>{ 
    res.send('welcome back user'); 
}); 

module.exports = router; 