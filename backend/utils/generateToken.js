import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d",
    });

// console.log(userId,process.snv.JWT_SECRET,token);
res.cookie("jwt",token,{
    maxAge: 15 * 24 * 60 * 1000, // milli sec
    httpOnly:true, // preverse xss
    sameSite: "Strict", // CSRF attacks
    secure: process.env.NODE_ENV !=="development"
});
};
export default generateTokenAndSetCookie;