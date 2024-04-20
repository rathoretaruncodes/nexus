import Navbar from "../components/navbar";
import { PostCard } from "../components/post-card";
import { usePosts } from "../hooks";


const Posts = () => {
    const {loading, posts} = usePosts();

    if(loading) {
        return (
            <div>
                <Navbar />
                ...loading
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center mt-10">
                {posts.map((post) => (
                    <PostCard 
                    id={post.id}
                    authorName={post.author.name || "Anonymous"} 
                    title={post.title} 
                    content={post.content} 
                    publishedDate={"Dec 3, 2023"} />
                ))}
            </div>
        </div>
        
    )
}

export default Posts;