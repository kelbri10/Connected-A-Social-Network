//interface 
export default interface IProfile{
    username: {_id: string}; 
    displayName: string;  
    bio: string; 
    location?: string; 
    posts?: {caption: string, hashtags: string[]}[];
}