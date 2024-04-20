import { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@rathoretaruncodes/nexus-common";
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


const SignupAuth = () => {
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: '',
        email: '',
        password:''
    });

    const sendRequest = async () => {
        try {
            const response = await axios.post(`${SERVER_URL}/api/v1/user/signup`, postInputs);
            const token = response.data;
            localStorage.setItem("token", token.jwt);
            navigate("/posts");
        } catch (error) {
            alert("Error while signing up");
        }
    }


    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className="flex justify-center">
                <div>
                    <div className="px-10 pb-8">
                        <div className="text-5xl font-extrabold mt-4">
                            Create an Account
                        </div>
                        <div className="text-2xl text-slate-400 font-light mt-4 text-center">
                            Already have an account?
                            <Link className="underline pl-2" to={"/signin"}>
                                Sign in
                            </Link>
                        </div>
                    </div>
                    <LabelledInput label="Name" placeholder="John Doe" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,             
                            name: e.target.value       
                        })
                    }} />
                    <LabelledInput label="Email" placeholder="johndoe@email.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,             
                            email: e.target.value       
                        })
                    }} />
                    <LabelledInput label="Password" type={"password"}  onChange={(e) => {
                        setPostInputs({
                            ...postInputs,             
                            password: e.target.value       
                        })
                    }} />
                    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-7">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default SignupAuth;