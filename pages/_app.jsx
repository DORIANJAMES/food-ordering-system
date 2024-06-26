import {SessionProvider} from "next-auth/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "@/layout/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Provider} from "react-redux";
import store from '../redux/store'

export default function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Layout>
                    <ToastContainer/>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>
    );
}
