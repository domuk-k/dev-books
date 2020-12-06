import express, { NextFunction, Request, Response } from 'express';
import book from './book';
import auth from './auth';

const router = express.Router();

router.use('/book', book);
router.use('/auth', auth);

export default router;
