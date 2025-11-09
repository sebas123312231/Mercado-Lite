import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Inventario } from "./inventario.entity" 

@Entity('Lote')
export class Lote {
  // Clave Primaria
  @PrimaryGeneratedColumn()
  idLote: number

  // Clave Foránea a Inventario
  @Column()
  idProducto: number

  @Column({ type: "date", nullable: true })
  fechaCaducidad: Date

  @Column()
  cantidadRecibida: number
  
  @Column({ type: "decimal" })
  costoUnitario: number
  
  @Column({ nullable: true })
  ubicacion: string


  // N:1 con Inventario
  @ManyToOne(() => Inventario, inventario => inventario.lotes)
  @JoinColumn({ name: "idProducto" })
  inventario: Inventario
}