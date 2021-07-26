import mongoose, { Schema } from "mongoose";
import IProfile from "./interfaces/profile.interface";

//schema for db 
const profileSchema = new Schema<IProfile>({
    username: {type: Schema.Types.ObjectId, ref: 'User'}, 
    displayName: String, 
    location: String, 
    bio: String,
    posts: [{
        caption: String, 
        hashtags: String
    }]
    
})

const Profile =  mongoose.model('Profile', profileSchema); 
module.exports = Profile; 