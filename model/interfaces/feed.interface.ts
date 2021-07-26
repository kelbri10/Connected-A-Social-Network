export default interface IFeed { 
    username: string; 
    posts: {caption: string, hashtags: string[]}[];  
}