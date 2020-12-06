import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import api from './api';

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
