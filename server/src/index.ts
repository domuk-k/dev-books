import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import api from './api';
import mongoose from 'mongoose';
import config from './config';

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => console.log('MongoDB Connection open'));

mongoose.connect('mongodb://127.0.0.1/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use(morgan('tiny'));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', api);

app.listen(5000, () => {
  console.log('server started');
});

export default app;
