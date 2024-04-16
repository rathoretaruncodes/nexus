import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

function LabelInput(label, placeholder, onChange) {
    return (
        <div>
            <Input />

        </div>
    )
}


const Auth = () => {
    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className="flex justify-center">
                <div>
                    <div className="text-5xl font-extrabold mt-4">
                        Create an Account
                    </div>
                    <div className="text-2xl text-slate-400 font-light mt-4">
                        Already have an account?
                        <Link className="underline" to={"/signin"}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;