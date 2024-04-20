import { Link } from "react-router-dom";
import Avatar from "./avatar";

interface PostCardProps {
    id:number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const PostCard:React.FC<PostCardProps> = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}) => {
    return (
        <Link to={`/post/${id}`} >
            <div className="px-16 py-4 my-4 rounded-lg hover:shadow-xl cursor-pointer hover:bg-gray-100">
                <div className="flex flex-row my-3 items-center">
                    <div className="mr-2">
                        {/* <Avatar name={authorName} /> */}
                        <Avatar />
                    </div>
                    <div className="pr-2 text-2xl font-medium">
                        {authorName}  
                    </div> 
                    <div className="text-slate-500 text-xl">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-3xl font-bold mb-2">
                    {title}
                </div>
                <div className="text-2xl font-normal">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="text-slate-500 text-xl font-thin my-7">
                    {`${Math.ceil(content.length / 200)} min read`}
                </div>
            </div>
        </Link>
    )
}