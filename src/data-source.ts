import "dotenv/config"
import "reflect-metadata"
import { DataSource } from "typeorm"


const port = process.env.DB_PORT as number | undefined
const host = process.env.DB_HOST
const username = process.env.DB_USER
const password =  process.env.DB_PASS
const database =  process.env.DB_NAME


export const AppDataSource = new DataSource({
    type: "postgres",
    host: host,
    port: port,
    username: username,
    password: password,
    database: database,
    entities: [`${__dirname}/**/database/*.{ts, js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts, js}`]
})
