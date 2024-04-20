import { Link } from "react-router-dom";
import Avatar from "./avatar";

const Navbar = () => {
    return (
        <div className="border-b flex justify-between px-10 py-2 items-center">
            <div className="font-extrabold text-4xl">
                <Link to="/posts">
                    nexus
                </Link>  
            </div>
            <div>
                {/* <Avatar name="Tarun Rathore" /> */}
                <Avatar />
            </div>

        </div>
    )
}

export default Navbar;