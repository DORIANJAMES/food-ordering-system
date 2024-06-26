import React from 'react';
import {useFormik} from "formik";
import {passwordSchema} from "@/schema/password";
import Input from "@/components/ui/Input";
import axios from "axios";
import {toast} from "react-toastify";
import bcrypt from "bcryptjs";

const Password = ({user}) => {
    const onSubmit = async (values, actions) => {
        const compare = await bcrypt.compare(values.passwordCurrent, user.password) || values.passwordCurrent === user.password;

        if (compare) {


            if (values.passwordCurrent) {
                delete values.passwordCurrent
            }
            alert(JSON.stringify(values))

            try {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values).then((res)=>{
                    if (res.status===200){
                        toast.success("Password updated successfully.")
                    } else {
                        toast.error("An error occurred. "+res.data.message)
                    }
                })
            } catch (error) {
                toast.error("An error occurred. "+error.response.data.message)
            }

        } else {
            toast.error("Old password is incorrect.")
        }
    }
    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            passwordCurrent: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit,
        validationSchema: passwordSchema,
    })

    const passwordInputs = [
        {
            id: "password" + 1,
            type: "password",
            name: "passwordCurrent",
            placeholder: "Type your old password",
            value: values.passwordCurrent,
            errorMessage: errors.passwordCurrent,
            touched: touched.passwordCurrent
        },
        {
            id: "password" + 2,
            type: "password",
            name: "password",
            placeholder: "Type desired password.",
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: "password" + 3,
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm your password.",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
        }
    ]
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4">
                {passwordInputs.map((input) => (
                    <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
                ))}
            </div>
            <button type="submit" className="btn-form mt-4">Edit</button>
        </form>
    );
};

export default Password;
