import React from 'react';
import Title from "@/components/ui/Title";
import {IoLocation, IoMail} from "react-icons/io5";
import {FaPhoneAlt,FaFacebook, FaTwitter, FaLinkedin,FaInstagram, FaPinterest} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto py-10">
                <div className="flex flex-wrap justify-evenly">
                    <div className="py-10 flex flex-col md:flex-1 gap-y-2">
                        <Title addedClass="font-dancing text-4xl text-white text-center mb-9">Contact Us</Title>
                        <div className="flex items-center gap-x-3 justify-center"><IoLocation/>Location</div>
                        <div className="flex items-center gap-x-3 justify-center"><FaPhoneAlt/>Call +90 545 383 87 00
                        </div>
                        <div className="flex items-center gap-x-3 justify-center"><IoMail/>info@doriansoftware.com</div>
                    </div>
                    <div className="flex flex-col md:flex-1 items-center justify-center gap-y-3 py-10">
                        <Title addedClass="font-dancing text-3xl mb-9">Alihan AÇIKGÖZ</Title>
                        <p className="w-96 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eum expedita, in labore nam numquam pariatur perferendis </p>
                        <div className="flex flex-wrap text-3xl gap-x-4">
                            <a href="" className="hover:text-primary hover:scale-110"><span><FaFacebook/></span></a>
                            <a href="" className="hover:text-primary hover:scale-110"><span><FaTwitter/></span></a>
                            <a href="" className="hover:text-primary hover:scale-110"><span><FaLinkedin/></span></a>
                            <a href="" className="hover:text-primary hover:scale-110"><span><FaInstagram/></span></a>
                            <a href="" className="hover:text-primary hover:scale-110"><span><FaPinterest/></span></a>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-1 gap-y-6 py-10 items-center">
                        <Title addedClass="font-dancing text-3xl">Opening Hours</Title>
                        <span className="font-sans">Everyday</span>
                        <span className="font-sans">8:00 AM - 06:00 PM</span>
                    </div>
                </div>
                <div className="text-center py-6">© 2024 All Rights Reserved By <a href="">DORIAN Games & Software Solutions</a></div>
            </div>

        </div>
    );
};

export default Footer;
