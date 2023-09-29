import jwt from 'jsonwebtoken';

const getJwtToken = (userId) => {
  return jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '30 days',
  });
};

export default getJwtToken;
