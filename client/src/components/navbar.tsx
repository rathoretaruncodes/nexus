import { Link } from "react-router-dom";
import Avatar from "./avatar";

const Navbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-3 items-center">
            <div className="font-extrabold text-4xl text-purple-900">
                <Link to={"/posts"}>
                    nexus
                </Link>  
            </div>
            <div className="flex items-center">
                <Link to={'/publish'}>
                    <button type="button" className="
                         font-bold rounded-3xl text-lg px-6 py-2 mr-4 border-4 text-purple-900 bg-transparent hover:bg-gray-200 ">
                        Start Writing
                    </button>
                </Link>
                {/* <Avatar name="Tarun Rathore" /> */}
                <Avatar />
            </div>

        </div>
    )
}

export default Navbar;