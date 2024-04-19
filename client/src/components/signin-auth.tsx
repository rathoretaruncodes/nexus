import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput} from "@rathoretaruncodes/nexus-common";
import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../config";

interface LabelledInputType {
    label: string;
    placeholder?: string;
    type?: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({label, placeholder, onChange}:LabelledInputType ) {
    return (
        <div>
            <label  className="block mb-2 text-sm font-bold text-gray-900 pt-5">{label}</label>
            <input onChange={onChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
        
    )
}


const SigninAuth = () => {
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: '',
        password:''
    });

    const sendRequest = async () => {
        try {
            const response = await axios.post(`${SERVER_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/posts");
        } catch (error) {
            //alert
        }
    }


    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className="flex justify-center">
                <div>
                    <div className="px-10 pb-8">
                        <div className="text-5xl font-extrabold mt-4">
                            Welcome to Nexus!
                        </div>
                        <div className="text-2xl text-slate-400 font-light mt-4 text-center">
                            Don't have an account?
                            <Link className="underline pl-2" to={"/signup"}>
                                Sign up
                            </Link>
                        </div>
                    </div>
                    <LabelledInput label="Email" placeholder="johndoe@email.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,             //Give me all the existing keys in postInputs
                            email: e.target.value       //Then overwrite name key
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"}  onChange={(e) => {
                        setPostInputs({
                            ...postInputs,             //Give me all the existing keys in postInputs
                            password: e.target.value       //Then overwrite name key
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-7">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default SigninAuth;