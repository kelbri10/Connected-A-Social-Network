import mongoose, { Schema } from "mongoose";
import IProfile from "./interfaces/profile.interface";

//schema for db 
const profileSchema = new Schema<IProfile>({
    username: String, 
    displayName: String, 
    posts: [{
        caption: String, 
        hashtags: String
    }]
    
})

const Profile =  mongoose.model('Profile', profileSchema); 
module.exports = Profile; 