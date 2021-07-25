import mongoose, { Schema } from 'mongoose'; 

//interface 
export interface User {
    username: string; 
    name: string; 
    email: string; 
    location: string; 
    profilePicture?: File | string; 
    connections?: number; 
}

//schema for db
const userSchema = new Schema<User>({ 
    username: String,
    name: String,
    email: String, 
    location: String, 
    profilePicture: String,
    connections: Number
})

const UserProfile = mongoose.model('User', userSchema); 
export default UserProfile; 