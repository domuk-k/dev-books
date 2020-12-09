import { Response, NextFunction } from 'express';
import { UserClass } from '../utils/UserClass';

const auth = (req: any, res: Response, next: NextFunction) => {
  const token = req.cookies['devooks-auth'];
  UserClass.findByToken(token, (err, user) => {
    if (err) next(err);

    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });
    req.token = token;
    req.user = user;

    next();
  });
};

export default auth;
