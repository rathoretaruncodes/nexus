import Navbar from "../components/navbar";


const Publish = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center w-full pt-8"> 
                <div className="max-w-screen-lg w-full">
                    <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" />
                        <TextEditor />
                </div>
            </div>
        </div>
    )
}

export default Publish;

export function TextEditor() {
    return (
        <div className="mt-2">
            <div className="w-full mb-4 ">
                <div className="flex items-center justify-between border">
                    <div className="my-2 bg-white rounded-b-lg w-full">
                        <label className="sr-only">Publish post</label>
                        <textarea id="editor" rows={8} className="focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Start writing here" required />
                    </div>
                </div>
                <button type="submit" className="mt-4 inline-flex
                 rounded-3xl items-center px-8 py-2.5 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-70000">
                    Publish
                </button>
            </div>
        </div>
    )
}