import express from 'express';
import config from './config';
import rolesRoutes from './routes/rolesRoutes';

import cors from 'cors';

const app = express()

//setting
app.set('port', config.port);


//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.use(rolesRoutes);


export default app;