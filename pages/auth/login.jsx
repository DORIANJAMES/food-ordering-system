import React, {useEffect, useState} from 'react';
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import {useFormik} from 'formik';
import {loginSchema} from "@/schema/login";
import {FaGithub} from "react-icons/fa";
import Link from "next/link";
import {useSession, signIn, getSession} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import axios from "axios";


const Login = ({user}) => {
    const {data: session} = useSession()
    const {push} = useRouter()
    const [currentUser, setCurrentUser] = useState();
    console.log(user)

    const onSubmit = async (values, actions) => {
        const {email, password} = values
        let options = {redirect: false, email, password};
        try {
            const res = await signIn('credentials', options)
            if (res.status === 200) {
                toast.success("Login Successful");
                actions.resetForm();
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } else {
                toast.error("Login Failed")
                actions.resetForm();
            }
        } catch (error) {
            if (error) {
                toast.error("Error: "+error.response.date.message)
            }
        }
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
                setCurrentUser(res.data.data.find(user=>user.email === session?.user.email));
                push("/profile/"+currentUser._id);
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [session,push,currentUser])


    console.log(session)

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: onSubmit,
        validationSchema: loginSchema,
    })

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Please enter your E-Mail.',
            values: values.email,
            touched: touched.email,
            errorMessage: errors.email
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Enter your password.',
            values: values.password,
            touched: touched.password,
            errorMessage: errors.password,
        }
    ]
    return (
        <div className="container mx-auto text-secondary justify-center items-center  my-32">
            <Title addedClass="text-4xl font-dancing mb-10 text-center font-bold">Login</Title>
            <div className="flex flex-col md:w-1/2 w-full mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-y-6 w-full mb-4">
                    {inputs.map(input => (
                        <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}></Input>
                    ))}
                    <div className="flex flex-col gap-y-6 w-full">
                        <button type="submit" className="btn-form w-full">LOGIN</button>
                        <button type="button" className="btn-form-github w-full flex gap-x-4"
                                onClick={() => signIn('github')}>
                            <FaGithub/>GITHUB
                        </button>
                    </div>
                </form>
                <Link href="/auth/register">
                    <span className="text-sm underline text-gray-500 flex mb-16">Don`t you have an account yet?</span>
                </Link>
            </div>

        </div>
    );
};

export const getServerSideEffects = async ({req}) => {}

export const getServerSideProps = async ({req}) => {
    const session = await getSession({req})

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/`)
    const user = res.data?.data.find((user) => user.email === session?.user.email)

    if (session && user) {
        return {
            redirect:{
                destination:"/profile/"+user?._id,
                permanent:false
            }
        }
    }
    return {
        props:{}
    }
}

export default Login;
