import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { UserHistorial } from "./userhistorial.entity"
import { Pedido } from './pedido.entity';

@Entity()
export class Historial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accion: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @OneToMany(() => UserHistorial, userHistorial => userHistorial.historial)
  userHistorials: UserHistorial[];

  @OneToMany(() => Pedido, pedido => pedido.historial)
  pedidos: Pedido[];
}
