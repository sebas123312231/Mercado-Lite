import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "sebastian",
    password: "sebastian123",
    database: "mercado_lite_db",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})  