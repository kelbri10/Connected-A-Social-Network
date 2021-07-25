import { model, Schema } from 'mongoose'; 
import IUser from './interfaces/user.interface';


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
    name: {
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

const UserModel = model<IUser>('User', userSchema);
export default UserModel; 