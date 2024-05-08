const jwt = require("jsonwebtoken");
const User = require('../models/userModel');

const protectRoute = async (req,res,next)=>{
try {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(401).json({ error: 'No token provided' })
    }
    console.log(token,'token')

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    console.log(decoded,'decoded')
    if (!decoded) {
        return res.status(401).json({ error: 'Invalid token' })
    }


    const user = await User.findById(decoded.user._id).select('-password')

    if (!user){
        return  res.status(400).json({error: 'User not found'});
    }
    req.user = user;

    next()

}catch (error) {
    console.error('following error in here',error)
    return res.status(500).json({error: 'Something went wrong',error3:error});
}



}
module.exports=protectRoute
