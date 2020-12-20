import express, { NextFunction, Request, Response } from 'express';
import auth from '../middlewares/auth';
import UserModel, { UserDocument } from '../model/User';
import DB from '../utils/db';

const router = express.Router();
const db = new DB<UserDocument>(UserModel);

const TOKEN_EXP_DAY = 7;
const A_DAY_TO_MILLISECONDS = 1000 * 60 * 60 * 24;
const tokenMaxAge = A_DAY_TO_MILLISECONDS * TOKEN_EXP_DAY;

// Authentificate User
router.post('/', async (req: any, res) => {
  const user = await db.readOne({ token: req.body.token });
  if (!user)
    res.json({
      user: null,
      isAuth: false,
    });
  res.json({
    user,
    isAuth: true,
  });
});

router.post(
  '/emails',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await db.readOne({ email: req.body.email });

      if (!user) {
        return res.json({
          result: false,
          message: 'Auth failed, email not found',
        });
      }
      res.json({
        result: true,
        message: 'email found',
        username: user.username,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post('/login', async (req, res, next) => {
  try {
    const user = await db.readOne({ email: req.body.email });

    if (!user)
      return res.json({
        loginResult: false,
        message: 'Auth failed, no user not found',
      });

    user.comparePassword(req.body.password, (err: any, isMatch: any) => {
      if (!isMatch)
        return res.json({
          loginResult: false,
          message: 'Wrong password',
        });

      user.generateToken((err, user: any) => {
        if (err) return res.status(400).send(err);

        res.cookie('devooks-auth', user.token, {
          maxAge: tokenMaxAge,
          httpOnly: false,
          sameSite: 'none',
          //   sameSite: process.env.NODE_ENV === 'production' ? 'lax' : undefined,
          //   domain:
          //     process.env.NODE_ENV === 'production' ? 'devooks.io' : undefined,
          //   secure: process.env.NODE_ENV === 'production' ? true : undefined,
        });

        res.json({
          loginResult: true,
          user,
        });
      });
    });
  } catch (error) {
    next(error);
  }
});

router.post('/logout', async (req: any, res: Response) => {
  UserModel.findOneAndUpdate(
    { _id: req.body._id },
    { token: '' },
    {},
    (err, _) => {
      if (err) return res.json({ success: false, err });

      return res.send({
        success: true,
        err: null,
      });
    }
  );
});

export default router;
