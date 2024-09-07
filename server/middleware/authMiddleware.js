import JWT from 'jsonwebtoken';

const authMiddleware = async(req, res, next)=>{
    const authHeader = req?.headers?.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({
            status: "auth_failed",
            message:"AuthenticationS failed"
        })
    }
    try {
        const userToken = authHeader?.split(" ")[1];
        req.body.user={
            userId:userToken.userId,
        }
        next();
    } catch (error) {
        return res.status(401).json({
            status: "auth_failed",
            message:"Authentication failed"
        })
    }
}

export default authMiddleware;