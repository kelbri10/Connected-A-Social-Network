//interface 
export default interface IProfile{
    username: {}[]; 
    displayName: string;  
    bio: string; 
    location?: string; 
    posts?: {caption: string, hashtags: string[]}[];
}