import UserModel from '../model/user.model'; 

import passport from 'passport'; 

const LocalStrategy = require('passport-local').Strategy;

passport.use('local-user', new LocalStrategy(
     (username: string, password: string, done: CallableFunction) => { 
        // const existingUser = await 
        UserModel.findOne({
            username: username,
            password: password
        }, (err: Error, existingUser: { username: string, password:string }) => { 
            if (err) {return done(err)}

            if (!existingUser) { 
                return done(null, false, { message: 'Incorrect username'})
            } else if (password !== existingUser.password) { 
                return done(null, false, {message: 'Incorrect password'})
            }


            return done(null, existingUser); 
        })

     
    }
))

//serialize and deserialize boilerplate for passport 

passport.serializeUser((existingUser: Express.User, done) => { 
    done(null, existingUser); 
}); 

passport.deserializeUser((existingUser: Express.User, done) => {
    done(null, existingUser);
});


export default passport; 