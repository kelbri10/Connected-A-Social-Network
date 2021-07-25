import mongoose, { Schema } from "mongoose";

//interface 
interface Post { 
    post: File | string; 
    caption: string; 
    hashtags: string[]; 
    date: Date;  
}

//schema for db 
const postSchema = new Schema<Post>({
    post: String, 
    caption: String, 
    hashtags: String, 
    date: Date
})

const Post =  mongoose.model('Post', postSchema); 