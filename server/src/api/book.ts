import express, { NextFunction, Request, Response } from 'express';
import DB from '../utils/db';

const router = express.Router();

// READ ALL
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await DB.read({});
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
    const data = await DB.create(req.body);
    res.json(data);
  } catch (error) {
    res.json({ error });
    next();
  }
});

// UPDATE ONE
router.patch('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await DB.update(req.body);
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
      res.json(await DB.delete(req.params.id));
    } catch (error) {
      res.json({ error: new Error(error) });
      next();
    }
  }
);

export default router;
