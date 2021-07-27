import UserModel from '../model/user.model'; 

import passport from 'passport'; 

const LocalStrategy = require('passport-local').Strategy;

passport.use('local-user', new LocalStrategy(
    async (username: string, password: string, done: CallableFunction) => { 
        const existingUser = await UserModel.findOne({
            username: username,
            
        }, (err: Error, existingUser: string) => { 
            if (err) {return done(err)}

            if (!existingUser) { 
                return done(null, false, { message: 'Incorrect username'})
            }

            // if (!existingUser.validPassword(password)) { 
            //     return done(null, false, { message: 'Incorrect password'})
            // }

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