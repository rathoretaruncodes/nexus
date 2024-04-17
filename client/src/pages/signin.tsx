import Auth from "../components/auth";
import Quote from "../components/quote";

const Signin = () => {
    return (
        <div className="grid grid-cols-2">
            <div>
                <Auth type="signin" />
            </div>
            <div className="invisible lg:visible">
                <Quote />
            </div>
        </div>
    )
}

export default Signin;