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
    email: {
        type: String, 
        required: true
    },
    profile: [{
        type: Schema.Types.ObjectId, 
        ref: 'Profile'}]
})

userSchema.plugin(passportLocalMongoose);

const UserModel = model<IUser>('User', userSchema);
export default UserModel; 