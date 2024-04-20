import { Link } from "react-router-dom";
import Avatar from "./avatar";

const Navbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-3 items-center">
            <div className="font-extrabold text-4xl">
                <Link to={"/posts"}>
                    nexus
                </Link>  
            </div>
            <div className="flex items-center">
                <Link to={'/publish'}>
                    <button type="button" className="text-white
                        bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-md px-8 py-2.5 mr-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        new
                    </button>
                </Link>
                {/* <Avatar name="Tarun Rathore" /> */}
                <Avatar />
            </div>

        </div>
    )
}

export default Navbar;