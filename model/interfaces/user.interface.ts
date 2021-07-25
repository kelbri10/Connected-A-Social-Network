//interface 
export default interface IUser {
    username: string; 
    name: string; 
    email: string; 
    location?: string; 
    picture?: string; 
    posts?: [caption: string, hashtags: string[]]; 
     
}