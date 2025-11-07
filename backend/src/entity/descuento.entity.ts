import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Inventario } from "./inventario.entity" 

@Entity('Descuento')
export class Descuento { 
  @PrimaryGeneratedColumn()
  idDescuento: number

  @Column()
  nombre: string

  @Column({ type: "decimal" })
  porcentaje: number
  
  @Column({ type: "date" })
  fechaInicio: Date

  @Column({ type: "date" })
  fechaFin: Date
  
  @Column({ default: true })
  estaActivo: boolean 

  // 1:N con Inventario
  @OneToMany(() => Inventario, inventario => inventario.descuento)
  inventarios: Inventario[]
}