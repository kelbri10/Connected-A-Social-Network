import mongoose, { Schema } from 'mongoose'; 

//interface
interface ImgPost { 
    image: File; 
    caption: string; 
    hashtags: string[]; 
    date: Date; 
}

//schema for db
const imgSchema = new Schema<ImgPost>({
    image: String, 
    caption: String, 
    hashtags: String, 
    date: Date
}); 

const ImgPost = mongoose.model('ImgPost', imgSchema); 