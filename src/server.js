import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';

const app = express();
mongoose.connect('mongodb://localhost:27017/aircnc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
