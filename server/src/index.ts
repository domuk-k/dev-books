import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import api from './api';
import mongoose from 'mongoose';
import config from './config';
import middlewares from './middlewares';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

const port = config.PORT || 5000;

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => console.log('MongoDB Connection open'));

mongoose.connect('mongodb://127.0.0.1/devbook', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', api);

app.listen(port, () => {
  console.log('server started');
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
