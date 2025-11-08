import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { User } from "./user.entity"
@Entity()
export class Carrito {
  @PrimaryGeneratedColumn()
  id: number  // ← Clave primaria

  @Column()
  total: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @OneToOne(() => User, user => user.carrito)  // ← Lado inverso de la relación
  user: User  // ← Propiedad para acceder al User (opcional, solo si lo necesitas)
}