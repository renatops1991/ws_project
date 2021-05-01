import express from "express";
import "./database";
<<<<<<< HEAD
=======
import { routes } from "./routes";
>>>>>>> 09dd490... Structure of database included

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log('Server is running =)'));