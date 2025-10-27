import express from "express";
import { config } from "dotenv";

import { connectToDB } from './source/models/__loaddatabase.js'; 

import router from "./source/router.js";
import { logRequests } from "./source/middleware.js";

config();

const port = process.env.PORT || 8000;

const app = express();

app.locals.appTitle = process.env.APPTITLE || "Express";


(async () => { 
    await connectToDB(); 
    app.use(logRequests); // Добавляем промежуточное ПО для логирования
    app.use('/', router); 
    app.listen(port); 
})();
