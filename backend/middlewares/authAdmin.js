import jwt from 'jsonwebtoken'

const authAdmin = async (req, res, next) => {
    const { adminToken } = req.headers;
    if (!adminToken) {
        return res.json({ success: false, message: "Not Authorized Login Again" })
    }
    try {
        const token_decode = jwt.verify(adminToken, process.env.JWT_SECRET);
        if(token_decode.email===process.env.ADMIN_EMAIL){
            next();
        }else{
            return res.json({success:false, message: "Not Authorized"})
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export default authAdmin