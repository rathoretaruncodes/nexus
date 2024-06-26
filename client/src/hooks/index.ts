import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../config";

export interface PostProp {
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
                Authorization:localStorage.getItem("token")
            }
        })
            .then(response => {
                setPosts(response.data.posts);
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

export const usePost = ({id}: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<PostProp>();

    useEffect(() => {
        axios.get(`${SERVER_URL}/api/v1/post/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then(response => {
            setPost(response.data.post);
            setLoading(false);
        })
        .catch(error => {
            console.log("Error fetching the post", error);
            setLoading(false);
        })
    }, [id])

    return {
        loading,
        post
    }
}