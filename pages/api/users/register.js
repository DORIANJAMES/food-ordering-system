import User from '../../../models/User';
import dbConnect from "@/utiils/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    await dbConnect();
    const body = req.body;
    const user = await User.findOne({email: body.email});
    if (user) {
        return res.status(400).json({message: "User already exists"});
    }
    try {
        const newUser = await new User(body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
        await newUser.save();
        return res.status(200).json({success: true, data: newUser});
    } catch (error) {
        return res.status(400).json({success: false, error: error.message});
    }
}
export default handler;
