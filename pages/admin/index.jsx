import React from 'react';
import axios from "axios";
import {useFormik} from "formik";
import {adminSchema} from "@/schema/admin";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import {toast} from "react-toastify";
import Link from "next/link";
import {useRouter} from "next/router";

const Index = () => {
    const {push} = useRouter();
    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: async (values, actions) => {

            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
                if (res.status === 200) {
                    toast.success("Login Successful").then(push("/admin/profile"));
                    actions.resetForm();
                } else {
                    toast.error("Login Failed");
                    actions.resetForm();
                }
            } catch (error) {
                if (error) {
                    toast.error(error.response.data.message);
                    actions.resetForm();
                }
            }
        },
        validationSchema: adminSchema,
    })

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Admin Username.',
            values: values.username,
            touched: touched.username,
            errorMessage: errors.username
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
        <div className="container mx-auto text-secondary justify-center items-center  my-40">
            <Title addedClass="text-4xl font-dancing mb-10 text-center font-bold">Admin Login</Title>
            <div className="flex flex-col md:w-1/2 w-full mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-wrap gap-y-6 w-full mb-4">
                    {inputs.map(input => (
                        <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}></Input>
                    ))}
                    <div className="flex flex-col gap-y-6 w-full">
                        <button type="submit" className="btn-form w-full">LOGIN</button>
                    </div>
                </form>
                <Link href="/">
                    <span className="text-sm underline text-gray-500 flex mb-16">Home Page</span>
                </Link>
            </div>

        </div>
    );
};

export const getServerSideProps = async (context) => {
    const myCookie = context.req?.cookies || "";

    if (myCookie.token === process.env.ADMIN_TOKEN) {
        return {
            redirect:{
                destination:"/admin/profile",
                permanent:false
            }
        }
    }

    return {
        props:{},
    }
}

export default Index;
