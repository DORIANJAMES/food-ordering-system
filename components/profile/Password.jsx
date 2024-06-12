import React from 'react';
import {useFormik} from "formik";
import {passwordSchema} from "@/schema/password";
import Input from "@/components/ui/Input";

const Password = () => {
    const onSubmit = async (values, actions) => {
        alert(JSON.stringify(values, null, 2))
        await new Promise((resolve) => setTimeout(resolve, 4000))
        actions.resetForm()
        console.log("Values",values);
    }
    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            passwordCurrent: "",
            passwordOne: "",
            passwordConfirm: "",
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
            values: values.passwordCurrent,
            errorMessage: errors.passwordCurrent,
            touched: touched.passwordCurrent
        },
        {
            id: "password" + 2,
            type: "password",
            name: "passwordOne",
            placeholder: "Type desired password.",
            values: values.passwordOne,
            errorMessage: errors.passwordOne,
            touched: touched.passwordOne,
        },
        {
            id: "password" + 3,
            type: "password",
            name: "passwordConfirm",
            placeholder: "Confirm your password.",
            values: values.passwordConfirm,
            errorMessage: errors.passwordConfirm,
            touched: touched.passwordConfirm,
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
