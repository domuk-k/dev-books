import express from 'express';
import book from './book';
import user from './user';
import auth from './auth';

const router = express.Router();

router.use('/book', book);
router.use('/user', user);
router.use('/auth', auth);

export default router;
