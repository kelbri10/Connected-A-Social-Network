import mongoose, { Schema } from "mongoose";

//interface 
interface Post { 
    post: File | string; 
    caption: string; 
    hashtags: string[]; 
    date: Date;  
}

//schema for db 
const textPostSchema = new Schema<Post>({
    post: String, 
    caption: String, 
    hashtags: String, 
    date: Date
})

const Post =  mongoose.model('Post', textPostSchema); 
module.exports = Post; 