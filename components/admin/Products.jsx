import React from 'react';
import Image from 'next/image';

const Products = ({switchIsProductModal}) => {
    return (
        <div>
            <div className=" flex items-center overflow-x-auto w-full border-2 border-primary rounded-md">
                <table className="w-full text-xs text-center min-w-[1000px]">
                    <thead className="text-sm text-white uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-3 py-6">Image</th>
                        <th scope="col" className="px-3 py-6">ID</th>
                        <th scope="col" className="px-3 py-6">Title</th>
                        <th scope="col" className="px-3 py-6">Price</th>
                        <th scope="col" className="px-3 py-6">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-secondary text-white hover:bg-primary transition-all">
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex justify-center">
                            <Image src="/images/food.png" alt="" width={52} height={52}/>
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>5487603485</span></td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Good Burger
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">100 TL</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">100 TL</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <button className="bg-primary w-12 h-12 rounded-full p-0 absolute xl:top-32 top-[640px] xl:right-14 right-6"
                    onClick={() => switchIsProductModal()}>+
            </button>
        </div>
    );
};

export default Products;
