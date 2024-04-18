import Quote from "../components/quote";
import SignupAuth from "../components/signup-auth";

const Signup = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <SignupAuth />
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}

export default Signup;