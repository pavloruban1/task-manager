import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//Routes
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
