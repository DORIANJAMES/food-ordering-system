import React from 'react';
import Image from 'next/image';
import Title from "@/components/ui/Title";
import Slider from "react-slick";

const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        customPaging: (i)=>(
            <div className="slick-slider-dots"></div>
        )
    };
    return (
        <div className="h-[calc(100vh_-_88px)] w-full container mx-auto">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative h-full w-full">
                    <Image src="/images/hero-bg.jpg" alt="" layout="fill" objectFit="cover"/>
                </div>
            </div>

            <div className="pt-[350px]">
                <Slider {...settings}>
                    <div>
                        <div className="flex flex-col items-start gap-y-6">
                            <Title addedClass="modalTitle">Fast Food Restaurant</Title>
                            <p className="font-sans text-sm w-full sm:w-2/3">Doloremque, itaque aperiam facilis rerum,
                                commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
                                ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero
                                ipsam</p>
                            <button className="btn-primary inline-block">Order Now</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-start gap-y-6">
                            <Title addedClass="modalTitle">Fast Food Restaurant</Title>
                            <p className="font-sans text-sm w-full sm:w-2/3">Doloremque, itaque aperiam facilis rerum,
                                commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
                                ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero
                                ipsam</p>
                            <button className="btn-primary inline-block">Order Now</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-start gap-y-6">
                            <Title addedClass="modalTitle">Fast Food Restaurant</Title>
                            <p className="font-sans text-sm w-full sm:w-2/3">Doloremque, itaque aperiam facilis rerum,
                                commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
                                ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero
                                ipsam</p>
                            <button className="btn-primary inline-block">Order Now</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col items-start gap-y-6">
                            <Title addedClass="modalTitle">Fast Food Restaurant</Title>
                            <p className="font-sans text-sm w-full sm:w-2/3">Doloremque, itaque aperiam facilis rerum,
                                commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora
                                ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero
                                ipsam</p>
                            <button className="btn-primary inline-block">Order Now</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Carousel
