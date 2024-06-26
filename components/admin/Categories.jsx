import React, {useEffect, useState} from 'react';
import Input from "@/components/ui/Input";
import {toast} from "react-toastify";
import axios from "axios";

const Categories = () => {

    const listener = event => {
        if (event.keyCode === 13) {
            addCategory();
        }
    };
    const addCategory = () => {
        /*if (inputText !== "") {
            setCategories([...categories, inputText])
            setInputText("")
        }*/

        try {
            const res = axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {title: inputText}).then((res) => {
                setCategories([...categories, res.data.data])
                toast.success("Category added successfully.")
            });

        } catch (error) {
            toast.error("An error occurred. " + error.response.data.message)
        }
    }


    const deleteCategory =  (id) => {
        //setCategories((prev)=>prev.filter((cat,i) => i !== index))
        const deleted = async (id) => {
            try{
                await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`).then((res) => {
                    if(res.status ===200) {
                        setCategories(categories.filter((cat) => cat._id !== id))
                        toast.success("Category deleted successfully.")
                    } else {
                        toast.error("An error occurred.")
                    }
                });
            } catch (error) {
                toast.error("An error occurred. " + error.response.data.message)
            }
        }
        deleted(id)
    }

    useEffect(() => {
        const getCategories = async () => {
            console.log("Delete Categories")
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then((res) => {
                    toast.success("Categories loaded successfully.")
                    setCategories(res?.data?.data)
                });
            } catch (error) {
                toast.error("An error occurred. " + error.response.data.message)
            }
        };
        getCategories();
    }, []);

    const [inputText, setInputText] = useState("")
    const [categories, setCategories] = useState(["Pizza", "Desert"])
    return (
        <div className="text-secondarye">
            <div className="flex gap-4 flex-1 items-center">
                <Input placeholder="Add a new category..." onChange={(e) => setInputText(e.target.value)}
                       value={inputText} onKeyDown={e=>listener(e)}/>
                <button className="btn-form" onClick={() => addCategory()}>Add</button>
            </div>
            <div className="mt-16 items-center max-h-[350px] overflow-auto">
                {categories.map((category, ) => (
                    <div key={category._id} className="flex justify-between flex-1 mb-2">
                        <b className="text-secondary font-dancing text-2xl">{category.title}</b>
                        <button className="btn-form !bg-danger" type="button" onClick={()=>deleteCategory(category._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
