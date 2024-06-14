import React from 'react';
import Input from "@/components/ui/Input";
import {useFormik} from "formik";
import {profileSchema} from "@/schema/profile";
import axios from "axios";
import {useRouter} from "next/router";

const Account = ({user}) => {
    const {push} = useRouter();
    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values)
        } catch (error) {
            console.log(error)
        }

    }
    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            fullName: user?.fullName,
            email: user?.email,
            phone: user?.phone,
            address: user?.address,
            job: user?.job,
            bio: user?.bio,
        },
        onSubmit,
        validationSchema: profileSchema,
    })
    const accountInputs = [
        {
            id: "account" + 1,
            type: "text",
            name: "fullName",
            placeholder: "Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName
        },
        {
            id: "account" + 2,
            type: "email",
            name: "email",
            placeholder: "E-Mail",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: "account" + 3,
            type: "tel",
            name: "phone",
            placeholder: "Phone",
            value: values.phone,
            errorMessage: errors.phone,
            touched: touched.phone
        },
        {
            id: "account" + 4,
            type: "text",
            name: "address",
            placeholder: "Address",
            value: values.address,
            errorMessage: errors.address,
            touched: touched.address
        },
        {
            id: "account" + 5,
            type: "text",
            name: "job",
            placeholder: "Job",
            value: values.job,
            errorMessage: errors.job,
            touched: touched.job
        },
        {
            id: "account" + 6,
            type: "text",
            name: "bio",
            placeholder: "Bio",
            value: values.bio,
            errorMessage: errors.bio,
            touched: touched.bio
        }

    ]
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4">
                {accountInputs.map((input) => (
                    <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
                ))}
            </div>
            <button type="submit" className="btn-form mt-4">Edit</button>
        </form>
    );
};

export default Account;
