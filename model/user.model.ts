import { model, Schema } from 'mongoose'; 
import IUser from './interfaces/user.interface';
const passportLocalMongoose = require('passport-local-mongoose');


//schema for db
const userSchema = new Schema<IUser>({ 
    username: { 
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true 
    },
    email: {
        type: String, 
        required: true
    },
    location: String,
    picture: String, 
    posts: [{
        caption: String, 
        hashtags: String
    }], 
})

userSchema.plugin(passportLocalMongoose);

const UserModel = model<IUser>('User', userSchema);
export default UserModel; 