import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import { Carrito } from "./carrito.entity"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  ci: number

  @Column()
  name: string

  @Column()
  lastname: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToOne(() => Carrito, carrito => carrito.user)  // ← Relación uno-a-uno
  @JoinColumn({ name: 'carritoId' })  // ← Esta tabla (User) tiene la FK
  carrito: Carrito  // ← Propiedad para acceder al carrito

  @Column({ nullable: true })
  carritoId: number  // ← Clave foránea (columna física en BD)
}
