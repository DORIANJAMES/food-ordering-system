import User from "@/models/User";
import dbConnect from "@/utiils/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    await dbConnect();
    const {method, query: {id}} = req;

    if (method === "GET") {
        try {
            const user = await User.findById(id);
            res.status(200).json({success: true, data: user});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message()});
        }
    }

    if (method === "PUT") {
        try {
            if (req.body.password) {
                //req.body.password = await bcrypt.hash(req.body.password, 10);
                //req.body.confirmPassword = await bcrypt.hash(req.body.confirmPassword, 10);

                req.body.password = await bcrypt.hash(req.body.password, 10);
                req.body.confirmPassword = await bcrypt.hash(req.body.confirmPassword, 10);
            }
            const users = await User.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json({success: true, data: users});
        } catch (error) {
            res.status(400).json({success: false, error: error.response.data.message()});
        }
    }
}
export default handler;
