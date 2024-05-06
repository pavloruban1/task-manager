import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

//Routes
import authRoutes from './routes/authRoutes.js';

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());

app.use('/api', authRoutes)

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});
