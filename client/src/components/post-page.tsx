import { PostProp } from "../hooks";

export const PostPage = ({post} : {post: PostProp}) => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-12 mx-16">
                <div className="col-span-9">
                    <div className="text-7xl font-extrabold mt-16">
                        {post.title}
                    </div>
                    <div className="text-slate-400 text-2xl mt-6">
                        {post.author.name} | Posted on December 24, 2023
                    </div>
                    <div className="text-4xl font-light mt-12">
                        {post.content}
                    </div>
                </div>
                
            </div>
        </div>
    )
}