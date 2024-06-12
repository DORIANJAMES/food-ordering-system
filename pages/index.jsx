import Head from "next/head";
import Home from "@/pages/home";



export default function Index() {
    return (
        <div>
            <Head>
                <title>Food ordering</title>
                <meta name="description" content=""/>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
                <meta name="author" content="DORIAN Games & Software Solutions"/>
            </Head>
            <main>
                <Home></Home>
            </main>
        </div>
    );
}
