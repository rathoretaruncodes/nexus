import Auth from "../components/auth";
import Quote from "../components/quote";

const Signup = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <Auth type="signup" />
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}

export default Signup;