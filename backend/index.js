import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();

app.use(express.json);

app.use(cors());

app.use(router);

const PORT = 8000;

app.listen(PORT, ()=>{
    c(`Server running on port ${PORT}`);
});

const c = (x) => {console.log(x);}