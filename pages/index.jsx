import Head from "next/head";
import Home from "@/pages/home";
import axios from "axios";



export default function Index({categoryNames}) {
    return (
        <div>
            <Head>
                <title>Food ordering</title>
                <meta name="description" content=""/>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                <meta name="author" content="DORIAN Games & Software Solutions"/>
            </Head>
            <main>
                <Home categoryNames={categoryNames}></Home>
            </main>
        </div>
    );
}

export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    return {
        props: {
            categoryNames : res?.data.data?res.data.data:[],
        },
    };
}
