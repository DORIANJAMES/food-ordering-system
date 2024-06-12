import React from 'react';
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import {useFormik} from 'formik';
import {reservationSchema} from "@/schema/reservation";

const Reservation = () => {

    const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
        initialValues: {
            fullName: '',
            phone: '',
            email: '',
            people: '',
            datetime: '',
        },
        onSubmit: async (values, actions) => {
            alert(JSON.stringify(values, null, 2))
            await new Promise((resolve) => setTimeout(resolve, 4000))
            actions.resetForm()
        },
        validationSchema: reservationSchema,
    });
    const inputs = [
        {
            id: 1,
            type: "text",
            name: "fullName",
            placeholder: "Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName
        },
        {
            id: 2,
            type: "number",
            name: "phone",
            placeholder: "Phone",
            value: values.phone,
            errorMessage: errors.phone,
            touched: touched.phone
        },
        {
            id: 3,
            type: "email",
            name: "email",
            placeholder: "E-Mail",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: 4,
            type: "number",
            name: "people",
            placeholder: "How Many People Together With?",
            value: values.people,
            errorMessage: errors.people,
            touched: touched.people
        },
        {
            id: 5,
            type: "datetime-local",
            name: "datetime",
            placeholder: "",
            value: values.datetime,
            errorMessage: errors.datetime,
            touched: touched.datetime
        }
    ]
    return (
        <div className="container mx-auto py-16">
            <Title addedClass="font-dancing text-secondary text-[2.5rem] mb-12">Book a Reservation</Title>
            <div className="flex flex-wrap-reverse justify-between items-stretch gap-10">
                <form onSubmit={handleSubmit} className="mx-auto lg:flex-1 w-full">
                    <div className="flex flex-col gap-4">
                        {inputs.map(input => (
                            <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}></Input>
                        ))}
                    </div>
                    <button type="submit" className="btn-form mt-4 w-48">Book Now</button>
                </form>
                <div className="container lg:flex-1 w-full !h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6362.700238070102!2d35.54156435974284!3d38.72716147636366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b12e724dcab6b%3A0x2216c54f9f7b8560!2sTrio%20Plus!5e1!3m2!1sen!2str!4v1717327812128!5m2!1sen!2str"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl h-full w-full">
                    </iframe>
                </div>
            </div>

        </div>
    );
};

export default Reservation;
