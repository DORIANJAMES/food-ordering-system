import React from 'react';
import Image from "next/image";
import Input from "@/components/ui/Input";

const Orders = () => {
    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-1 w-full gap-4">
                <table className="w-full text-xs text-center min-w-[1000px]">
                    <thead className="text-sm text-white uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-3 py-6">Order ID</th>
                        <th scope="col" className="px-3 py-6">Date</th>
                        <th scope="col" className="px-3 py-6">Customer</th>
                        <th scope="col" className="px-3 py-6">Address</th>
                        <th scope="col" className="px-3 py-6">Total</th>
                        <th scope="col" className="px-3 py-6">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-secondary text-white hover:bg-primary transition-all">
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">5487603485</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>08.05.2024</span></td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>Alihan AÇIKGÖZ</span></td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Yıldırım Beyazıt
                            Mah.
                            Felek Sok. 9/2 Melikgazi / KAYSERİ
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">100 TL</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Completed</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
