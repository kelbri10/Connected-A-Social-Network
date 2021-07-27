import { model, Schema } from 'mongoose'; 
import IProfile from './interfaces/profile.interface'; 



//schema for profileDB
const profileSchema = new Schema<IProfile>({
    username: {
        type: Schema.Types.ObjectId, 
        ref: 'User'},
    displayName: {
        type: String, 
        default: 'New user'
    },
    bio: {
        type: String, 
        default: 'No bio yet'
    },
    location: {
        type: String, 
        default: 'No location data'
    },
    posts: [{
        caption: String, 
        hashtags: String
    }]
})

const ProfileModel = model<IProfile>('Profile', profileSchema); 
export default ProfileModel; 