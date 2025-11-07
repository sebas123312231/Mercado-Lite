import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Inventario } from "./inventario.entity" 

@Entity('Proveedor')
export class Proveedor {
  @PrimaryGeneratedColumn()
  idProveedor: number

  @Column()
  nombre: string

  @Column({ nullable: true })
  telefono: string
  
  @Column({ unique: true })
  email: string
  
  @Column({ nullable: true })
  direccion: string 
  
  // 1:N con Inventario
  @OneToMany(() => Inventario, inventario => inventario.proveedor)
  inventarios: Inventario[]
}