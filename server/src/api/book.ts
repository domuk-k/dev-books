import express, { NextFunction, Request, Response } from 'express';
import faker from 'faker';

const router = express.Router();

// READ ALL
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json(Array.from({ length: 7 }, faker.helpers.userCard));
});

// READ ONE
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.json(`this is api getOne`);
});

// CREATE ONE
router.post('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.json(`this is api post`);
});

// UPDATE ONE
router.patch('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.json(`this is api patch`);
});

// DELETE ONE
router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  res.json(`this is api delete`);
});

export default router;
