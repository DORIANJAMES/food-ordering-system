import cookie from 'cookie';

const handler = (req, res) => {
    const {method} = req;

    console.log(req)
    if (method === "POST") {
        const {username, password} = req.body;

        if (username === "admin" && password === "Dorian@1") {
            res.setHeader("Set-Cookie", cookie.serialize("token", process.env.ADMIN_TOKEN, {
                maxAge: 60 * 60 * 24 * 7,
                sameSite: 'strict',
                path: '/'
            }));
            return res.status(200).json({message: "Login Successful"});
        } else {
            return res.status(400).json({message: "Wrong Credentials"});
        }
    }
    if (method === "PUT") {
        res.setHeader("Set-Cookie", cookie.serialize("token", process.env.ADMIN_TOKEN, {
            maxAge: -1,
            path: "/"
        }));
        res.status(200).json({message:"Success"})
    }
}

export default handler;
