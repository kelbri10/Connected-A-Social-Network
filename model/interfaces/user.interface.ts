//interface 
export default interface IUser {
    username: string; 
    displayName: string; 
    email: string; 
    location?: string; 
    picture?: string; 
    posts?: [caption: string, hashtags: string[]]; 
     
}