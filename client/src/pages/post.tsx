import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { usePost } from "../hooks";
import { PostPage } from "../components/post-page";


const Post = () => {
    const { id } = useParams();
    const {loading, post} = usePost({
        id: id || ""
    });
    if(loading || !post) {
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
            <PostPage />
        </div>
    )
}

export default Post;