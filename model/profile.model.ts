import { model, Schema } from 'mongoose'; 
import IProfile from './interfaces/profile.interface'; 
import UserModel from './user.model';


//schema for profileDB
const profileSchema = new Schema<IProfile>({
    username: {type: Schema.Types.ObjectId, ref: 'User'},
    displayName: String, 
    bio: String, 
    location: String, 
    posts: [{
        caption: String, 
        hashtags: String
    }]
})

const ProfileModel = model<IProfile>('Profile', profileSchema); 
export default UserModel; 