import React, {useEffect, useState} from 'react';
import Input from "@/components/ui/Input";

const Categories = () => {

    const listener = event => {
        if (event.keyCode === 13) {
            addCategory();
        }
    };
    const addCategory = () => {
        if (inputText !== "") {
            setCategories([...categories, inputText])
            setInputText("")
        }
    }
    const deleteCategory = (category,index) => {
        setCategories((prev)=>prev.filter((cat,i) => i !== index))
    }
    const [inputText, setInputText] = useState("")
    const [categories, setCategories] = useState(["Pizza", "Desert"])
    return (
        <div className="text-secondarye">
            <div className="flex gap-4 flex-1 items-center">
                <Input placeholder="Add a new category..." onChange={(e) => setInputText(e.target.value)}
                       value={inputText} onKeyDown={e=>listener(e)}/>
                <button className="btn-form" onClick={() => addCategory()}>Add</button>
            </div>
            <div className="mt-16 items-center">
                {categories.map((category, index) => (
                    <div key={index} className="flex justify-between flex-1 mb-2">
                        <b className="text-secondary font-dancing text-2xl">{category}</b>
                        <button className="btn-form !bg-danger" onClick={() => deleteCategory(category,index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
