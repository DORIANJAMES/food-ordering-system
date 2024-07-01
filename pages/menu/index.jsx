import React from 'react';
import Menu from "/components/product/MenuWrapper"
import axios from "axios";

const Index = ({categoryNames}) => {
    return (
        <div>
            <Menu categoryNames={categoryNames}></Menu>
        </div>
    );
};

export default Index;

export const getServerSideProps = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    return {
        props: {
            categoryNames : res?.data.data?res.data.data:[],
        },
    };
}
