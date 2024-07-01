import Product from '@/models/Product';
import dbConnect from '@/utiils/dbConnect';

const handler = async (req, res) => {
    await dbConnect();
    const {method, query: {id}} = req;

    if (method === "GET") {
        try {
            const product = await Product.findById(id);
            res.status(200).json({success: true, data: product});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message});
        }
    }

    if (method === "PUT") {
        try {
            const product = await Product.findByIdAndUpdate(id, req.body);
            res.status(200).json({success: true, data: product});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message});
        }
    }

    if (method === "DELETE") {
        try {
            const product = await Product.findByIdAndDelete(id);
            res.status(200).json({success: true, data: product});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message});
        }
    }
}

export default handler;
