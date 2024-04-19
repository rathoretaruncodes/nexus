import Avatar from "./avatar";

interface PostCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const PostCard:React.FC<PostCardProps> = ({
    authorName,
    title,
    content,
    publishedDate
}) => {
    return (
        <div className="px-16 my-4 rounded-lg hover:shadow-xl">
            <div className="flex flex-row my-3 items-center">
                <div className="mr-2">
                    <Avatar name={authorName} />
                </div>
                <div className="pr-2">
                    {authorName}  
                </div> 
                <div className="text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-bold mb-2">
                {title}
            </div>
            <div className="text-md font-normal">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin my-7">
                {`${Math.ceil(content.length / 200)} min read`}
            </div>
        </div>
    )
}