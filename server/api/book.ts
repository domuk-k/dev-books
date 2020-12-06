import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json('this is book api');
});

export default router;
