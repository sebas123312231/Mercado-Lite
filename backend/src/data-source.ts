import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";
import { Carrito } from "./entity/carrito.entity";
import { Pedido } from "./entity/pedido.entity";
import { Historial } from "./entity/historial.entity";
import { UserHistorial } from "./entity/userhistorial.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "sebastian",
    password: "sebastian123",
    database: "mercado_lite_db",
    synchronize: true,
    logging: true,
    entities: [User, Carrito, Pedido, Historial, UserHistorial],
    subscribers: [],
    migrations: [],
})  