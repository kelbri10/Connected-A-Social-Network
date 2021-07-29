import { model, Schema } from 'mongoose'; 
import IProfile from './interfaces/profile.interface'; 



//schema for profileDB
const profileSchema = new Schema<IProfile>({
    username: [{
        type: Schema.Types.ObjectId, 
        ref: 'User' }],
        
    displayName: {
        type: String, 
        default: 'Display Name'
    },
    bio: {
        type: String, 
        default: "We don't know much about them, but we're sure their great."
    },
    location: {
        type: String, 
        default: 'In the Universe Somewhere'
    },
    posts: [{
        caption: String, 
        hashtags: String
    }]
})

const ProfileModel = model<IProfile>('Profile', profileSchema); 
export default ProfileModel; 