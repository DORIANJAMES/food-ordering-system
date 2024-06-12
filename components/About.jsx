import Title from "@/components/ui/Title";
import Image from "next/image";


const About = () => {
    return (
        <div className="bg-secondary py-14">
            <div className="container mx-auto flex flex-wrap-reverse justify-center items-center gap-20">
                <div className="justify-center flex">
                    <div className="relative w-[455px] h-[608px] flex justify-center">
                        <Image src="/images/about-img.png" alt="" layout="fill"/>
                    </div>
                </div>
                <div className="text-white md:w-1/2 ">
                    <Title addedClass="font-dancing text-[2.5rem]">We Are Food</Title>
                    <p className="my-5 flex flex-col items-center font-sans">There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don`t look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t
                        anything embarrassing hidden in the middle of text. All</p>
                    <button className="btn-primary ">Read More</button>
                </div>
            </div>

        </div>

    );
};

export default About;
