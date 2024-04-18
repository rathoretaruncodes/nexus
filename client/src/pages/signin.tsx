import Quote from "../components/quote";
import SigninAuth from "../components/signin-auth";

const Signin = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <SigninAuth/>
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}

export default Signin;