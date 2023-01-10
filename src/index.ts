import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";


const app = express();
app.use(express.json())
const port = process.env.PORT

AppDataSource.initialize().then(() =>{
    app.use(routes)
    app.listen(port, () => console.log(`Servidor rodando em localhost:${port}`));
})

