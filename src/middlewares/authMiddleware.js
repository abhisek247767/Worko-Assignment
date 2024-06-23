const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No credentials provided.' });s
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    // Replace with your actual username and password check
    const validUsername = process.env.BASIC_AUTH_USERNAME;
    const validPassword = process.env.BASIC_AUTH_PASSWORD;

    if (username !== validUsername || password !== validPassword) {
        return res.status(401).json({ message: 'Access denied. Invalid credentials.' });
    }

    next();
};



module.exports = authMiddleware;
