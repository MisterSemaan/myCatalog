/* eslint-disable consistent-return,no-console */
import jwt from 'jsonwebtoken';

export const authStrategy = (req, res, next) => {
  const token = req.headers.authorization;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('Error in processing the token', err);
      next(err);
    }
    req.user = user;
    next();
  });
};
