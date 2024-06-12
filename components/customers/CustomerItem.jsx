import Image from "next/image"

const CustomerItem = ({imgSrc}) => {
    return (
        <div>
            <div className="mx-5">
                <div className="bg-secondary p-5 flex-col flex-wrap rounded-lg">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequuntur, dolor ducimus ex fugit harum iusto modi nemo odit praesentium quam quasi repellendus totam velit voluptatem voluptates voluptatibus.
                    </p>
                    <div className="flex flex-col mt-5">
                        <span>Moana Michell</span>
                        <span>ebge eudew</span>
                    </div>
                </div>
                <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5">
                    <Image src={imgSrc} alt="" layout="fill" objectFit="contain" className="rounded-full"></Image>
                </div>
            </div>
        </div>
);
};

export default CustomerItem;
