import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../config";

interface PostProp {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        name: string
    }
}

export const usePosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<PostProp[]>([]);

    useEffect(() => {
        axios.get(`${SERVER_URL}/api/v1/post/bulk`, {
            method: "GET",
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            }
        })
            .then(response => {
                setPosts(response.data.post);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching the posts:", error);
                setLoading(false);
            });
    }, [])

    return {
        loading, 
        posts
    }
}