import Input from "@/components/ui/Input";
import {useFormik} from 'formik';
import {footerSchema} from "@/schema/footer";
import {useState} from "react";


const AdminFooter = () => {
    const [icons, setIcons] = useState(['']);
    const [iconUrl, setIconUrl] = useState([''])
    const [iconSets, setIconSets] = useState(['facebook','linkedin' ]);
    const deleteIcons =(e)=>{
        console.log(e);
    }

    const {values, handleSubmit, handleChange, handleBlur, errors, touched} = useFormik({
        initialValues: {
            location: "",
            email: "",
            phone: "",
            description: "",
            date: "",
            time: "",
            url: "",
            icon: ""
        },
        onSubmit: async (values, actions) => {
            alert(JSON.stringify(values, null, 2))
            await new Promise((resolve) => setTimeout(resolve, 4000))
            actions.resetForm()
        },
        validationSchema: footerSchema

    })
    const inputs1 = [
        {
            id: "footer" + 1,
            type: "text",
            name: "location",
            placeholder: "Location Lat+Lang",
            value: values.location,
            errorMessage: errors.location,
            touched: touched.location
        },
        {
            id: "footer" + 2,
            type: "text",
            name: "email",
            placeholder: "Author's E-Mail",
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: "footer" + 3,
            type: "phone",
            name: "phone",
            placeholder: "Author's Phone",
            value: values.phone,
            errorMessage: errors.phone,
            touched: touched.phone
        },
        {
            id: "footer" + 4,
            type: "text",
            name: "description",
            placeholder: "Web Site Description",
            value: values.description,
            errorMessage: errors.description,
            touched: touched.description
        },
        {
            id: "footer" + 5,
            type: "text",
            name: "date",
            placeholder: "Opening Dates (as string)",
            value: values.date,
            errorMessage: errors.date,
            touched: touched.date
        },
        {
            id: "footer" + 6,
            type: "text",
            name: "time",
            placeholder: "Opening Time (as string)",
            value: values.time,
            errorMessage: errors.time,
            touched: touched.time
        },
    ];
    return (
        <div>
            <div>
                <div className="">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-2">
                            {inputs1.map(input => (
                                <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur}/>
                            ))}
                        </div>
                        <div className="flex flex-row gap-x-2 mt-2 items-center">
                            <Input placeholder="Icon Link" onChange={(e) => setIconUrl(e.target.value)}/>
                            <Input placeholder="Icon Name" onChange={(e) => setIcons(e.target.value)} value={icons}/>
                            <button className="btn-form" type="button" onClick={()=> {
                                setIconSets([...iconSets, icons])
                                setIcons('')
                            }}>Add</button>
                        </div>
                        <div>
                            <ul className="text-secondary flex flex-row gap-4 mt-3">
                                {
                                    iconSets.map((icon,index) => (
                                        <li key={index} className="flex gap-x-4 items-center border border-primary rounded-full w-24 justify-center ">
                                            <i className={`text-2xl fab fa-${icon}`}></i>
                                            <button type="button" className="text-danger cursor-pointer" onClick={()=>{
                                                setIconSets((prev)=>prev.filter((item,i)=>i !== index));
                                            }}><i className="fas fa-trash-alt"></i></button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="mt-2">
                            <button type="submit" className="btn-form w-full">Update</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AdminFooter;
