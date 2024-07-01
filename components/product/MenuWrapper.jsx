import Title from "@/components/ui/Title";
import MenuItem from "@/components/product/MenuItem";
import {useState} from "react";
import {set} from "mongoose";


const MenuWrapper = ({categoryNames}) => {
    const [active, setActive] = useState(0);

    return (
        <div className="container mx-auto !mb-16">
            <div className="flex flex-col items-center w-full">
                <Title addedClass="font-dancing text-secondary text-[2.5rem]">Our Menu</Title>
                <div className=" flex font-sans font-thin !gap-x-16 mt-10">
                    {categoryNames && categoryNames.map((category, index) => (
                        <button onClick={()=>setActive(index)} key={index}
                                className={`btn-secondary ${index === active && "active"}`}>{category.title}</button>
                    ))}
                </div>
            </div>

            <div className="!mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 flex-wrap">
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
        </div>
    );
};

export default MenuWrapper;

