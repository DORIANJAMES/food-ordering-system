import {useState} from 'react';
import Image from 'next/image';
import Title from "@/components/ui/Title";
import {FaProductHunt, FaJediOrder, FaDoorOpen} from "react-icons/fa";
import {MdCategory} from "react-icons/md";
import {GiFootprint} from "react-icons/gi";
import Products from "@/components/admin/Products";
import Orders from "@/components/admin/Orders";
import Categories from "@/components/admin/Categories";
import AdminFooter from "@/components/admin/AdminFooter";
import {useRouter} from "next/router";
import {toast} from "react-toastify";
import axios from "axios";

const Profile = () => {
    const {push} = useRouter();
    const [tabs, setTabs] = useState(0);

    const exitAdmin = async () => {
        try {
            if (confirm("Are you sure to EXIT from Admin Account?")) {
                try {
                    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
                    if (res.status === 200) {
                        push("/admin");
                        toast.success("Exit successful.");
                    } else {
                        toast.error("Exit failed.");
                    }
                } catch (error) {
                    if (error) {
                        toast.error(error.response.data.message);
                    }
                }
            }

        } catch (err) {
            if (err) {
                toast.error("Exit failed. "+err.response.data.message);
            }
        }
    }

    return (
        <div className="min-h-[calc(100vh_-_620px)] lg:m-14 m-6 flex xl:flex-row flex-col xl:gap-x-16 gap-x-6 flex-1">

            <div
                className="flex flex-col gap-y-6 border-primary border-[1px] xl:w-96 w-100 min-h-96 text-secondary justify-between flex-shrink-0 items-center">
                <div className="flex flex-col gap-y-6 items-center">
                    <div className="relative xl:w-52 w-48 xl:h-52 h-48 border-[1px] border-primary rounded-full mt-8">
                        <Image src="/images/admin/alihan-resim.jpeg" alt="" layout="fill" objectFit="cover"
                               className="rounded-full "/>
                    </div>
                    <Title addedClass="font-dancing text-xl">Alihan AÇIKGÖZ</Title>
                </div>
                <div className="flex flex-col w-full">
                    <button className={`btn-profile ${tabs === 0 && "active"}`} onClick={() => setTabs(0)}>
                        <FaProductHunt className="text-xl"/>Products
                    </button>
                    <button className={`btn-profile ${tabs === 1 && "active"}`} onClick={() => setTabs(1)}><FaJediOrder
                        className="text-xl"/>Orders
                    </button>
                    <button className={`btn-profile ${tabs === 2 && "active"}`} onClick={() => setTabs(2)}><MdCategory
                        className="text-xl"/>Categories
                    </button>
                    <button className={`btn-profile ${tabs === 3 && "active"}`} onClick={() => setTabs(3)}><GiFootprint
                        className="text-xl"/>Footer
                    </button>
                    <button className={`btn-profile ${tabs === 4 && "active"}`} onClick={exitAdmin}><FaDoorOpen
                        className="text-xl"/>Çıkış
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full mt-5 xl:mt-0">
                <Title
                    addedClass="font-dancing text-4xl text-secondary">{tabs === 0 && "Products"}{tabs === 1 && "Orders"}{tabs === 2 && "Categories"}{tabs === 3 && "Footer"}</Title>
                {tabs === 0 && (
                    <Products/>
                )}
                {tabs === 1 && (
                    <Orders/>
                )}
                {tabs === 2 && (
                    <Categories/>
                )}
                {tabs === 3 && (
                    <AdminFooter/>
                )}

            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const myCookieProfile = context.req?.cookies || '';

    if (myCookieProfile.token !== process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "/admin",
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}

export default Profile;
