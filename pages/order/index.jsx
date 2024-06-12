import Image from "next/image";


const Index = () => {
    return (
        <div className="min-h-[calc(100vh_-_515px)] flex justify-center gap-y-6 flex-col p-10">
            <div className=" flex items-center overflow-x-auto w-full">
                <table className="w-full text-xs text-center min-w-[1000px]">
                    <thead className="text-sm text-white uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="px-3 py-6">Order ID</th>
                        <th scope="col" className="px-3 py-6">Customer</th>
                        <th scope="col" className="px-3 py-6">Address</th>
                        <th scope="col" className="px-3 py-6">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-secondary text-white hover:bg-primary transition-all">
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">5487603485</td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <span>Alihan AÇIKGÖZ</span></td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Yıldırım Beyazıt Mah.
                            Felek Sok. 9/2 Melikgazi / KAYSERİ
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">100 TL</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-around bg-green-700 w-full font-dancing text-secondary py-6">
                <div>
                    <div className="relative w-24 h-24 text-secondary">
                        <Image src="/images/cart/payment.svg" alt="" layout="fill"/>
                    </div>
                    <span className="text-2xl">Payment</span>
                </div>

                <div>
                    <div className="relative w-24 h-24 text-secondary animate-bounce">
                        <Image src="/images/cart/preparing.svg" alt="" layout="fill"/>
                    </div>
                    <span className="text-2xl">Preparing</span>
                </div>
                <div>
                    <div className="relative w-24 h-24 text-secondary ">
                        <Image src="/images/cart/onTheRoad.svg" alt="" layout="fill"/>
                    </div>
                    <span className="text-2xl">On The Road</span>
                </div>
                <div>
                    <div className="relative w-24 h-24 text-secondary">
                        <Image src="/images/cart/delivered.svg" alt="" layout="fill"/>
                    </div>
                    <span className="text-2xl">Delivered</span>
                </div>
            </div>
        </div>
    );
};

export default Index;
