import Auth from "../components/auth";
import Quote from "../components/quote";

interface Signup{

}

const Signup:React.FC<Signup> = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <Auth />
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}

export default Signup;