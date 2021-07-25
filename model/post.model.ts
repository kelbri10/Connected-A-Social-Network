import mongoose, { Schema } from "mongoose";

//interface 
interface TextPost { 
    post: File | string; 
    caption: string; 
    hashtags: string[]; 
    date: Date;  
}

//schema for db 
const textPostSchema = new Schema<TextPost>({
    post: String, 
    caption: String, 
    hashtags: String, 
    date: Date
})

const TextPost =  mongoose.model('TextPost', textPostSchema); 