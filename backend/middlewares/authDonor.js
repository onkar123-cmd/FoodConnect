import jwt from "jsonwebtoken"

const authDonor = async (req, res, next) => {
    const { donorToken } = req.headers;
    if (!donorToken) {
        return res.json({ success: false, message: "Not Authorized Login Again" })
    }
    try {
        const token_decode = jwt.verify(donorToken, process.env.JWT_SECRET);
        req.body.donorId = token_decode.id
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export default authDonor