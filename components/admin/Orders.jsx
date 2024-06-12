import React from 'react';

const Orders = () => {
    return (
        <div>
            <div className=" flex items-center overflow-x-auto w-full border-2 border-primary rounded-md">
                <table className="w-full text-xs text-center min-w-full">
                    <thead className="text-sm text-white uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-3 py-6">Order ID</th>
                        <th scope="col" className="px-3 py-6">Product</th>
                        <th scope="col" className="px-3 py-6">Customer</th>
                        <th scope="col" className="px-3 py-6">Address</th>
                        <th scope="col" className="px-3 py-6">Total</th>
                        <th scope="col" className="px-3 py-6">Payment</th>
                        <th scope="col" className="px-3 py-6">Status</th>
                        <th scope="col" className="px-3 py-6">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-secondary text-white hover:bg-primary transition-all">
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">5487603485</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Good Pizza</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>Alihan AÇIKGÖZ</span></td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Yıldırım Beyazıt Mah.
                            Felek Sok. 9/2 Melikgazi / KAYSERİ
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">100 TL</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Credit Card</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Done</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white"><button className="btn-form !bg-success">Next Stage</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
