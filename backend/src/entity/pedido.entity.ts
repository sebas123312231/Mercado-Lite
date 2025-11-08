import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from "typeorm";
import { Carrito } from "./carrito.entity";
import { Historial } from "./historial.entity";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne (() => Carrito, carrito => carrito.pedidos)
    @JoinColumn({ name: 'carritoId' })
    carrito: Carrito;

    @Column()
    carritoId: number;

    @ManyToOne (() => Historial, historial => historial.pedidos)
    @JoinColumn({ name: 'historialId' })
    historial: Historial;

    @Column()
    historialId: number;
}   