import express, { NextFunction, Request, Response } from 'express';
import UserModel, { UserDocument } from '../model/User';
import DB from '../utils/db';

const router = express.Router();
const db = new DB<UserDocument>(UserModel);

// READ ALL
router.get('/', async (req, res: Response, next: NextFunction) => {
  try {
    const users = await UserModel.find()
      .populate({ path: 'marked_books', populate: 'owner' })
      .populate({ path: 'done_books', populate: 'owner' });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next();
  }
});

// GET SINGLE User
router.get('/:user_id', async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.user_id })
      .populate({ path: 'marked_books', populate: 'owner' })
      .populate({ path: 'done_books', populate: 'owner' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error });
    next(error);
  }
});

// CREATE ONE : Sign Up
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.json({ success: true, user });
  } catch (error) {
    res.json({
      success: false,
      error,
      msg: error.code === 11000 ? 'duplicated key' : 'search the code',
    });
    next();
  }
});

// UPDATE ONE
router.patch('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await db.update(req.body);
    res.json(data);
  } catch (error) {
    res.json({ error });
    next();
  }
});

// DELETE ONE
router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(await db.delete(req.params.id));
    } catch (error) {
      res.json({ error: new Error(error) });
      next();
    }
  }
);

export default router;
