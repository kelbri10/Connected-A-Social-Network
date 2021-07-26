export default interface IFeed { 
    username: string; 
    displayName: string; 
    posts: {caption: string, hashtags: string[]}[];  
}