const passport =  require('passport'); 
const LocalStrategy = require('passport-local').Strategy;
const userDB = require('../model/user.model')

passport.use('local-user', new LocalStrategy(
    (username: string, password:string, done) => { 
        const existingUser = await userDB.findOne({
            username: username
        }, (err: Error, user: string) => { 
            if (err) {return done(err)}

            if (!existingUser) { 
                return done(null, false, { message: 'Incorrect username'})
            }

            if (!existingUser.validPassword(password)) { 
                return done(null, false, { message: 'Incorrect password'})
            }

            return done(null, user); 
        })
    }
))

export default passport; 