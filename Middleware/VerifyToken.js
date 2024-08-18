import jwt from 'jsonwebtoken';

const VerifyToken = (req, res, next) => {
    let token = req.headers.authorization;

    if (token) {
        token = token.split(" ")[1]; // Split the Bearer part from the token

        try {
            jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch (err) {
            console.log(err);
            return res.status(401).json({ message: "Unauthorized user" });
        }
    } else {
        return res.status(401).json({ message: "Token missing" });
    }
};

export default VerifyToken;
