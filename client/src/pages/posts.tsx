import Navbar from "../components/navbar";
import { PostCard } from "../components/post-card";
import { Spinner } from "../components/spinner";
import { usePosts } from "../hooks";


const Posts = () => {
    const {loading, posts} = usePosts();

    if(!loading) {
        return (
            <div>
                <Navbar />
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center mt-10 items-start">
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