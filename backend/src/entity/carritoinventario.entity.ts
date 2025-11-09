import { Entity, ManyToOne, PrimaryColumn, JoinColumn} from "typeorm";
import { Carrito } from "./carrito.entity";
import { Inventario } from "./inventario.entity";

@Entity()
export class CarritoInventario {
    @PrimaryColumn()
    carritoId: number;

    @ManyToOne(() => Carrito, carrito => carrito.carritoInventarios)
    @JoinColumn({ name: 'carritoId' })
    carrito: Carrito;

    @PrimaryColumn()
    inventarioId: number;

    @ManyToOne(() => Inventario, inventario => inventario.carritoInventarios)
    @JoinColumn({ name: 'inventarioId' })
    inventario: Inventario;
}
