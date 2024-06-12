import Image from 'next/image';
import Title from "@/components/ui/Title";
import {useDispatch, useSelector} from "react-redux";
import {reset} from "@/redux/cartSlice";

const Index = () => {
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();


    return (
        <div className="min-h-[calc(100vh_-_515px)]">
            <div className="flex justify-between md:flex-row flex-col">
                <div className="min-h-[calc(100vh_-_515px)] flex flex-1 items-center p-10 overflow-x-auto">
                    <table className="w-full text-xs text-center min-w-[1000px]">
                        <thead className="text-sm text-white uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="px-3 py-6">Product</th>
                            <th scope="col" className="px-3 py-6">Extras</th>
                            <th scope="col" className="px-3 py-6">Quantity</th>
                            <th scope="col" className="px-3 py-6">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart?.products?.map((product) => (
                                <tr className="bg-secondary text-white hover:bg-primary transition-all" key={product.id}>
                                    <td className="flex items-center gap-x-6 justify-center py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                        <div className="relative w-20 h-20">
                                            <Image src="/images/food.png" alt="" layout="fill"/>
                                        </div>
                                        <span className="font-dancing text-2xl">{product.name}</span>
                                    </td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                        {product.extras.map((extra,i) => (<span key={i}>{extra.name}, </span>))}
                                    </td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{product.quantity}</td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">{product.price}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div
                    className="bg-secondary min-h-[calc(100vh_-_515px)] flex  items-center px-16 md:w-auto w-full justify-center">

                    <div className="flex flex-col gap-y-6">
                        <Title addedClass="font-dancing text-4xl text-white">CART TOTAL</Title>
                        <div>
                            <div>
                                <span className="font-sans font-bold">Sub Total: </span><span
                                className="font-sans font-light">{cart.total} TL</span>
                            </div>
                            <div>
                                <span className="font-sans font-bold">Discount: </span><span
                                className="font-sans font-light">0,00 TL</span>
                            </div>
                            <div>
                                <span className="font-sans font-bold">Total: </span><span
                                className="font-sans font-light">{cart.total} TL</span>
                            </div>
                        </div>
                        <button className="btn-form" onClick={()=>dispatch(reset())}>CHECKOUT NOW</button>
                    </div>

                </div>
            </div>
        </div>);
};

export default Index;
