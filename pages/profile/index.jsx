import React from "react"
import {useState} from 'react';
import Image from 'next/image';
import Title from "@/components/ui/Title";
import {FaUserAstronaut, FaKey, FaJediOrder, FaDoorOpen} from "react-icons/fa";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Orders from "@/components/profile/Orders";

const Index = () => {
    const [tabs, setTabs] = useState(0);

    return (
        <div className="min-h-[calc(100vh_-_620px)] lg:m-14 m-6 flex lg:flex-row flex-col lg:gap-x-16 gap-x-6 flex-1">

            <div
                className="flex flex-col gap-y-6 border-primary border-[1px] lg:w-96 w-100 min-h-96 text-secondary justify-between flex-shrink-0 items-center">
                <div className="flex flex-col gap-y-6 items-center">
                    <div className="relative lg:w-52 w-48 lg:h-52 h-48 border-[1px] border-primary rounded-full mt-8">
                        <Image src="/images/admin/alihan-resim.jpeg" alt="" layout="fill" objectFit="cover"
                               className="rounded-full "/>
                    </div>
                    <Title addedClass="font-dancing text-xl">Alihan AÇIKGÖZ</Title>
                </div>
                <div className="flex flex-col w-full">
                    <button className={`btn-profile ${tabs===0&&"active"}`} onClick={() => setTabs(0)}><FaUserAstronaut className="text-xl"/>Account
                    </button>
                    <button className={`btn-profile ${tabs===1&&"active"}`} onClick={() => setTabs(1)}><FaKey className="text-xl"/>Password
                    </button>
                    <button className={`btn-profile ${tabs===2&&"active"}`} onClick={() => setTabs(2)}><FaJediOrder className="text-xl"/>Orders
                    </button>
                    <button className={`btn-profile ${tabs===3&&"active"}`} onClick={() => setTabs(3)}><FaDoorOpen className="text-xl"/>Çıkış
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full mt-5 lg:mt-0">
                <Title
                    addedClass="font-dancing text-4xl text-secondary">{tabs === 0 && "Account Settings"}{tabs === 1 && "Password Settings"}{tabs === 2 && "Orders"}</Title>
                {tabs === 0 && (
                    <Account/>
                )}
                {tabs === 1 && (
                    <Password/>
                )}
                {tabs === 2 && (
                    <Orders/>
                )}


            </div>
        </div>
    );
};

export default Index;
