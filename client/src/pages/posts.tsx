import { PostCard } from "../components/post-card";


const Posts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <PostCard 
            authorName={"Tarun Rathore"} 
            title={"Is Web3 really making a comeback in 2024?"} 
            content={"There are signs that web3 is gaining traction in 2024, especially in certain areas.Web3 Gaming: The growth of web3 gaming is a bright spot, with forecasts predicting a significant rise in users and transactions. There's even a dedicated panel at a major gaming conference this year focused on web3 gaming's comeback. NFTs with Utility: Interest in NFTs is picking up again, but with a twist. Successful NFTs in 2024 are expected to be those that offer real benefits or applications, rather than just speculation."} 
            publishedDate={"Dec 3, 2023"} />
        </div>
        
    )
}

export default Posts;