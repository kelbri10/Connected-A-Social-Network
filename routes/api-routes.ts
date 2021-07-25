import express from 'express'; j
import addNewUser from '../controllers/profileController'; 

const router = express.Router(); 

// POST method for adding new users to app
router.post('/api/user', addNewUser); 

module.exports = router; 