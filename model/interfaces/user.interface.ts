//interface 
export default interface IUser {
    username: string; 
    password: string; 
    email: string; 
    displayName: string;  
    bio?: string; 
    location?: string; 
    posts?: {caption: string, hashtags: string[]}[];
}