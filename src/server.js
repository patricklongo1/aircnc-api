import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { resolve } from 'path';

import routes from './routes';

const app = express();
mongoose.connect('mongodb://localhost:27017/aircnc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3333);
