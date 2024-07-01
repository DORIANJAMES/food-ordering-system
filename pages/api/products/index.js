import dbConnect from "@/utiils/dbConnect";
import Product from '@/models/Product';

const handler = async (req,res) => {
    await dbConnect();
    const {method} = req;

    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json({success:true, data:products});
        } catch (error) {
            res.status(400).json({success:false, error:error.response.data.message});
        }
    }

    if (method === "POST") {
        try {
            const newProduct = await Product.create(req.body);
            res.status(200).json({success:true, data:newProduct});
        } catch (error) {
            res.status(400).json({success:false, error:error});
        }
    }
    
}

export default handler;
