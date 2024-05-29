import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

//cors setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

//express Json setup
app.use(express.json());

//cookieParser setup
app.use(cookieParser());

//express urlencoded setup
app.use(express.urlencoded({ limit: '10000kb', extended: true }));



//export app
export default app;