import express, { NextFunction, Request, Response } from 'express';
import { BookModel, BookDocument } from '../model/Book';
import DB from '../utils/db';

const router = express.Router();
const db = new DB<BookDocument>(BookModel);

// READ ALL
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await db.read({});
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    next();
  }
});

// READ USER'S BOOKLIST

// CREATE ONE
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await db.create(req.body);
    res.json(data);
  } catch (error) {
    res.json({ error });
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
