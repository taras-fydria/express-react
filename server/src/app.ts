import * as dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

import path from 'path';
import express, {Request, Response, Application} from 'express';
import AppRouter from './routes/routes';
import dbConnection from './dbConnection';

const PORT = process.env.PORT || 5050;

const app: Application = express();

app.use(express.json());
app.use('/api', AppRouter);
app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'dist')));

app.get('*', (req: Request, res: Response): void => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'dist', 'index.html'));
});


const start = async (): Promise<void> => {
    try {
        await dbConnection.connect();
        app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
    } catch (e) {
        console.error(e);
    }
};

start();
