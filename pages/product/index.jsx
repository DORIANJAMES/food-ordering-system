import Image from 'next/image';
import Title from "@/components/ui/Title";
import {useState} from "react";
import {addProduct} from "@/redux/cartSlice";
import {useDispatch,useSelector} from "react-redux";

const itemsExtra = [
    {
        id:1,
        name: "Ketchup",
        price : 1
    },
    {
        id:2,
        name: "Mayonnaise",
        price : 2
    },
    {
        id:3,
        name: "Mustard",
        price: 3
    },
    {
        id:4,
        name: "Mayonnaise with Garlic",
        price: 4
    },
    {
        id:5,
        name: "Barbecue Sauce",
        price: 5
    }
]

const foodItems = [
    {
        id:1,
        name:"Pizza 1",
        price:10,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam molestiae.",
        sizes: [
            {
                id:1,
                name:'Small',
                price:0,
            },
            {
                id:2,
                name: "Medium",
                price: 20
            },
            {
                id:3,
                name: "Big",
                price: 30
            }
        ],
        extraOptions: [
            {
                id:1,
                name: "Ketchup",
                price : 1
            },
            {
                id:2,
                name: "Mayonnaise",
                price : 2
            },
            {
                id:3,
                name: "Mustard",
                price: 3
            },
            {
                id:4,
                name: "Mayonnaise with Garlic",
                price: 4
            },
            {
                id:5,
                name: "Barbecue Sauce",
                price: 5
            }
        ]
    }
]

const Index = () => {
    const [prices, setPrices] = useState([10, 20, 30]);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(itemsExtra)
    const [extras, setExtras] = useState([])

    //REDUX
    //burada dispatch yapılıyor
    const dispatch = useDispatch();

    //burada state alınıyor
    const cart = useSelector((state)=>state.cart);



    const handleSize = (sizeIndex) => {
        const difference = prices[sizeIndex]-prices[size];
        setSize(sizeIndex);
        changePrice(difference)
    }

    const changePrice = (number) => {
        setPrice((prevPrice) => prevPrice + number)
    }

    const handleChange = (e, item) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(item.price)
            // For sending added extra ingredients to the card
            setExtras([...extras,item])
        } else {
            changePrice(-item.price)
            // For sending deducted extra ingredients to the card
            setExtras(extras.filter((extra) => extra.id !== item.id))
        }
    }

    const handleClick = ()=> {
        dispatch(addProduct({...foodItems[0],extras,price,quantity:1}));
    }
    console.log(cart)

    return (
        <div className="flex flex-wrap text-secondary items-center p-28">
            <div className="md:w-[400px] md:h-[400px] relative md:flex-1 w-36 h-36 mx-auto">
                <Image src="/images/food.png" alt="" layout="fill" objectFit="contain"/>
            </div>
            <div className="flex-1 w-80 md:text-start text-center md:items-start items-center">
                <Title addedClass="font-dancing text-6xl">Good Pizza</Title>
                <span
                    className="text-primary font-bold text-2xl underline underline-offset-2 my-10 inline-block">${price}</span>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit
                    corporis ex laboriosam tenetur at ad aspernatur eius numquam molestiae.</p>

                <div>
                    <h3 className="font-dancing text-2xl">Choose Size</h3>
                    <div className="flex sm:justify-start justify-center items-end gap-x-8 w-80 font-dancing mt-3">

                        <div className="w-[30px] h-[30px] relative cursor-pointer" onClick={()=>handleSize(0)}>
                            <span className="productDetailsSizeSpan">Small</span>
                            <Image src="/images/food.png" alt="" layout="fill"/>
                        </div>

                        <div className="w-[40px] h-[40px] relative cursor-pointer" onClick={()=>handleSize(1)}>
                            <span className="productDetailsSizeSpan">Large</span>
                            <Image src="/images/food.png" alt="" layout="fill"/>
                        </div>

                        <div className="w-[50px] h-[50px] relative cursor-pointer" onClick={()=>handleSize(2)}>
                            <span className="productDetailsSizeSpan">X-Large</span>
                            <Image src="/images/food.png" alt="" layout="fill"/>
                        </div>

                    </div>
                </div>
                <div className="md:text-start text-center md:items-start !items-center mt-5">
                    <Title addedClass="font-dancing text-2xl">Choose Additional Ingredients</Title>
                    <div className="relative my-4 flex gap-x-4 md:text-start text-center md:justify-start justify-center">
                        {
                            extraItems.map((item)=> (
                                <label className="flex items-center gap-x-1" key={item.id}>
                                    <input type="checkbox" className="accent-primary w-5 h-5" onChange={(e) => handleChange(e,item)}/>
                                    <span className="text-md font-semibold font-dancing">{item.name}</span>
                                </label>
                            ))
                        }
                    </div>
                </div>
                <button className="btn-primary my-4" onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    );
};

export default Index;
