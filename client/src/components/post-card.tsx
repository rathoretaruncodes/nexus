
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
            <div className="flex flex-row my-3">
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

    function Avatar({ name }: { name: string}) {
        return (
            <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
            </div>
        )
    }
}