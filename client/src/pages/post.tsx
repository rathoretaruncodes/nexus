import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { usePost } from "../hooks";
import { PostPage } from "../components/post-page";
import { Spinner } from "../components/spinner";


const Post = () => {
    const { id } = useParams();
    const {loading, post} = usePost({
        id: id || ""
    });
    if(loading || !post) {
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
            <PostPage post={post} />
        </div>
    )
}

export default Post;