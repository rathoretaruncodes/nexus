import axios from "axios";
import Navbar from "../components/navbar";
import { SERVER_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


const Publish = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="flex justify-center w-full pt-8"> 
                <div className="max-w-screen-lg w-full">
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" />
                    <TextEditor onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                    <button onClick={async () => {
                        const response = await axios.post(`${SERVER_URL}/api/v1/post`, {
                            title,
                            content: description
                        }, {
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/post/${response.data.id}`)
                    }}
                        type="submit" className="inline-flex
                        rounded-3xl items-center px-8 py-2 text-lg font-bold text-center text-purple-900 border-4 bg-transparent hover:bg-gray-200 ">
                    Publish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Publish;

export function TextEditor({ onChange }: {onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div className="mt-2">
            <div className="w-full mb-4 ">
                <div className="flex items-center justify-between border">
                    <div className="my-2 bg-white rounded-b-lg w-full">
                        <label className="sr-only">Publish post</label>
                        <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Start writing here" required />
                    </div>
                </div>
            </div>
        </div>
    )
}