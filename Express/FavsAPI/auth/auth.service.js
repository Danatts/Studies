const jwt = require('jsonwebtoken');
const compose = require('composable-middleware');

const { getUserByEmail } = require('../api/user/user.service');

const validateToken = async (token) => {
  try {
    const payload = await jwt.verify(token, 'secret_key');
    return payload;
  } catch (err) {
    return null
  }
};

const isAuth = () => {
  return compose().use(
    async (req, res, next) => {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({message: 'token not provided'}).end();
      }
      const [, token] = authHeader.split(' ');
      const payload = await validateToken(token);
      if (!payload) {
        return res.status(401).json({message: 'invalid token '}).end();
      }
      const user = await getUserByEmail(payload.email);
      if (!user) {
        return res.status(401).end();
      }
      req.user = user;
      next();
      return null;
    },
  );
};

const signToken = (payload) => {
  const token = jwt.sign(payload, 'secret_key', {
    expiresIn: '2h',
  });
  return token;
};

module.exports = {
  isAuth,
  signToken,
};
