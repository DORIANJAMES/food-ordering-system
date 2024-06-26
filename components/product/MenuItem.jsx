import Image from "next/image";
import Title from "@/components/ui/Title";
import {FaShoppingCart} from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
    return (
        <div className="bg-secondary rounded-3xl mt-5">
            <Link href="/product">
                <div className="bg-gray-100 rounded-bl-2xl rounded-t-2xl  hover:scale-110 transition-all flex justify-center hover:shadow-2xl hover:shadow-secondary">
                    <div className="relative w-36 h-36 m-5 my-16 hover:scale-110 transition-all  duration-200">
                        <Image priority="high" src="/images/food.png" alt="" layout="fill" />
                    </div>
                </div>
            </Link>
            <div className="!mx-5 my-5 gap-y-16">
                <Title addedClass="font-sans text-[1.5rem]">Delicious Burger</Title>
                <p className="my-4 font-sans">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                    magnam voluptatem repellendus sed eaque</p>
                <div className="w-full flex justify-between">
                    <span>20$</span>
                    <button className="btn-product"><FaShoppingCart/></button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
