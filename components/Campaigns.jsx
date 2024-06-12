import Image from "next/image";
import Title from "@/components/ui/Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignsItem = () => {
    return (
        <div className="bg-secondary rounded-md flex-1 flex items-center py-[40px] px-[25px] gap-x-4 justify-around">
            <div className="relative sm:w-52 sm:h-52 w-36 h-36 after:content-[''] border-[5px] border-primary rounded-full flex overflow-hidden">
                <Image src="/images/o1.jpg" alt="" layout="fill" objectFit="cover" className="hover:scale-110 transition-all ease-in duration-200"/>
            </div>
            <div className="inline-block text-center">
                <Title addedClass="font-dancing text-[30px]">Deneme İndirim</Title>
                <div className="font-dancing gap-x-5 my-3">
                    <span className="text-[40px]">20%</span>
                    <span className="inline-block ml-1">Off</span>
                </div>
                <button className="btn-primary !flex !gap-x-4">Order Now <FaShoppingCart size={20}/> </button>
            </div>
        </div>
    );
}

const Campaigns = () => {
    return (
        <div>
            <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
                <CampaignsItem/>
                <CampaignsItem/>
            </div>
        </div>
    );
};

export default Campaigns;
