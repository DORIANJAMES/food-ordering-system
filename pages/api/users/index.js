import User from "@/models/User";
import dbConnect from "@/utiils/dbConnect";


const handler = async (req,res) => {
    await dbConnect();

    const {method} = req;

    if (method === "GET") {
        try {
            const users = await User.find({});
            res.status(200).json({success:true, data:users});
        } catch (error) {
            res.status(400).json({success:false, error:error.message()});
        }
    }

    if (method === "POST") {
        try {
            const user = await User.create(req.body);
            res.status(200).json({success:true, data:user});
        } catch (error) {
            res.status(400).json({success:false, error:error.message()});
        }
    }
}

export default handler;
