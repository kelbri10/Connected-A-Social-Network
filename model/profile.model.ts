import mongoose, { Schema } from "mongoose";

//schema for db 
const profileSchema = new Schema<Profile>({
    username: String, 
    displayName: String, 
    posts: [{
        caption: String, 
        hashtags: String
    }]
    
})

const Profile =  mongoose.model('Profile', profileSchema); 
module.exports = Profile; 