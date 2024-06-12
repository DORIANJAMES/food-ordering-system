import React from 'react';
import Title from "@/components/ui/Title";
import CustomerItem from "@/components/customers/CustomerItem";
import Slider from "react-slick";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Customers = () => {
    function NextBtn({onClick}) {
        return (
            <button className="text-primary absolute text-4xl -bottom-12 left-1/2 flex items-center justify-center " onClick={onClick}><IoIosArrowDroprightCircle/></button>
        )
    }
    function PrevBtn({onClick}) {
        return  (
            <button className="text-primary absolute text-4xl -bottom-12 right-1/2 flex items-center justify-center " onClick={onClick}><IoIosArrowDropleftCircle/></button>
        )
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3500,
        nextArrow:<NextBtn></NextBtn>,
        prevArrow:<PrevBtn></PrevBtn>,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]

    }
    return (
        <div className="container mx-auto my-5 mb-16">
            <Title addedClass="text-[2.5rem] font-dancing text-secondary text-center">What Say our Customers</Title>

            <Slider {...settings} className="flex flex-wrap">
                <CustomerItem imgSrc="/images/clients/client1.jpg"/>
                <CustomerItem imgSrc="/images/clients/client2.jpg"/>
            </Slider>

        </div>
    );
};

export default Customers;
