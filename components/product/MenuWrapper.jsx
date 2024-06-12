import Title from "@/components/ui/Title";
import MenuItem from "@/components/product/MenuItem";

const MenuWrapper = () => {
    return (
        <div className="container mx-auto !mb-16">
            <div className="flex flex-col items-center w-full">
                <Title addedClass="font-dancing text-secondary text-[2.5rem]">Our Menu</Title>
                <div className=" flex font-sans font-thin !gap-x-16 mt-10">
                    <button className="btn-secondary">All</button>
                    <button className="btn-secondary">Burger</button>
                    <button className="btn-secondary">Pizza</button>
                    <button className="btn-secondary">Desert</button>
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
