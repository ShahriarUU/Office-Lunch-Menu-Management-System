import app from './app.js';
import dotenv from 'dotenv';

//configure dotenv 
dotenv.config({ path: './.env' });

//server port
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`server is running port ${port}`);
})