import Category from "@/models/Category"
import dbConnect from "@/utiils/dbConnect";

const handler = async (req, res) => {
    await dbConnect();
    const {method, query: {id}} = req;

    if (method === "GET") {
        try {
            const category = await Category.findById(id);
            res.status(200).json({success: true, data: category});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message})
        }
    }

    if (method === "DELETE") {
        try {
            const category = await Category.findByIdAndDelete(id);
            res.status(200).json({success: true, data: category});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message})
        }
    }
}

export default handler;
