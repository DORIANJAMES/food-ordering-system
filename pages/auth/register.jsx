import React from 'react';
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import {useFormik} from 'formik';
import {registerSchema} from "@/schema/register";
import Link from "next/link";
import axios from "axios";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {signIn} from "next-auth/react";

const Register = () => {
    const {push} = useRouter()

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async (values, actions) => {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, values);
                if (res.status ===200) {
                    toast.success("User Registered Successfully");
                    const {email,password} = values
                    const options = {redirect:false,email,password}
                    const user = await signIn('credentials', options)
                    if (user.status === 200) {
                        toast.success("Sign in completed.");
                        actions.resetForm()
                        push("/profile")
                    }

                    /*actions.resetForm();
                    push("/auth/login")*/
                } else {
                    toast.error("User Registration Failed");
                    actions.resetForm();
                }
            } catch (error) {
                if (error) {
                    toast.error(error.response.data.message);
                    actions.resetForm();
                }
            }

        },
        validationSchema: registerSchema,
    })

    const inputs = [
        {
            id: 1,
            name: 'fullName',
            type: 'text',
            placeholder: 'Full Name.',
            values: values.fullName,
            touched: touched.fullName,
            errorMessage: errors.fullName
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Please enter your E-Mail.',
            values: values.email,
            touched: touched.email,
            errorMessage: errors.email,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Enter your password.',
            values: values.password,
            touched: touched.password,
            errorMessage: errors.password,
        }, {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Retype your password.',
            values: values.confirmPassword,
            touched: touched.confirmPassword,
            errorMessage: errors.confirmPassword,
        }
    ]
    return (
        <div className="container mx-auto text-secondary justify-center items-center  my-24">
            <Title addedClass="text-4xl font-dancing mb-10 text-center font-bold">Register</Title>
            <div className="flex flex-col md:w-1/2 w-full mx-auto">
                <form onSubmit={handleSubmit} className="w-full mb-4">
                    <div className="flex flex-col gap-4">
                        {inputs.map(input => (
                            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}></Input>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-6 w-full mt-6">
                        <button type="submit" className="btn-form w-full">REGISTER</button>
                    </div>
                </form>
                <Link href="/auth/login">
                    <span className="text-sm underline text-gray-500 flex mb-16">Have an account yet?</span>
                </Link>
            </div>

        </div>
    );
};

export default Register;
