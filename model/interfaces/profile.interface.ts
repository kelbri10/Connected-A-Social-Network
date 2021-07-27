//interface 
export default interface IProfile{
    displayName: string;  
    bio: string; 
    location?: string; 
    posts?: {caption: string, hashtags: string[]}[];
}