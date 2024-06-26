import React, {useState} from 'react'
import Logo from '../ui/Logo';
import { GiHamburger } from "react-icons/gi";
import {IoIosCloseCircle} from "react-icons/io";
import {FaUser, FaShoppingCart, FaSearch, FaJediOrder} from "react-icons/fa";
import Search from '../ui/Search';
import {useRouter} from 'next/router';
import Link from "next/link";

import {useSelector} from "react-redux";




const Header = () => {
    const router = useRouter()

    const [isSearchModal, setIsSearchModal] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false)

    //burada card state ini alıyoruz
    const cart = useSelector(state => state.cart)
    console.log(cart)

    return (
        <div className={`h-[5.5rem] z-50 relative ${router.asPath === '/' ? 'bg-transparent' : 'bg-secondary'} `}>
            <div className="container mx-auto flex justify-between h-full items-center">
                <Logo/>
                <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white uppercase sm:flex hidden ${isMenuModal === true && "!grid place-content-center"} `}>
                    <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                        <li className="menuItems">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="menuItems">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className="menuItems">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="menuItems">
                            <Link href="/reservation">Book Table</Link>
                        </li>
                    </ul>
                    {isMenuModal && <button className="absolute top-4 right-4" onClick={() => setIsMenuModal(false)}>
                        <IoIosCloseCircle
                            size={25} className="text-secondary hover:text-primary transition-all"/>
                    </button>}
                </nav>

                <div className="flex items-center">
                    <Link href="/auth/login" className="secondMenuItems"><FaUser/></Link>
                    <Link href="/cart" className="secondMenuItems">
                        <span className="relative">
                            <FaShoppingCart/>
                            {
                                cart.products.length > 0 ?
                                    <span className="w-4 h-4 text-secondary text-xs grid place-content-center rounded-full bg-primary absolute -top-3 -right-3 font-semibold">{cart.products.length}</span> :''
                            }
                        </span>

                    </Link>
                    <button
                        className="secondMenuItems"
                        onClick={() => setIsSearchModal(true)}>
                        <FaSearch/>
                    </button>
                    <a href="" className="secondMenuItems">
                        <button className="btn-primary"><span className="lg:inline-block hidden">Order Online</span><span className="lg:hidden inline-block text-[26px]"><FaJediOrder/></span></button>
                    </a>
                    <button className="secondMenuItems inline-block sm:hidden text-4xl" onClick={()=>setIsMenuModal(true)}>
                        <GiHamburger/>
                    </button>
                </div>
            </div>
            {isSearchModal && <Search setIsSearchModal={setIsSearchModal}/>}

        </div>
    )
}

export default Header
