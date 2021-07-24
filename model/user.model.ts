import mongoose, { Schema } from 'mongoose'; 

//interface 
interface User { 
    name: string; 
    email: string; 
    location: string; 
    profilePicture?: File | string; 
    connections?: number; 
}

//schema for db
const userSchema = new Schema<User>({ 
    name: String, 
    email: String, 
    location: String, 
    profilePicture: String,
    connections: Number
})

const User = mongoose.model('User', userSchema); 