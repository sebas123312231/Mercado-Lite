import { Column, Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm"
import { Inventario } from "./inventario.entity" 
import { Categoria } from "./categoria.entity" 

@Entity('CategoriaProducto')
export class CategoriaProducto {
  // Clave Primaria Compuesta 1 (FK a Inventario)
  @PrimaryColumn()
  idProducto: number

  // Clave Primaria Compuesta 2 (FK a Categoria)
  @PrimaryColumn()
  idCategoria: number

  @Column({ type: "date" })
  fechaAsignacion: Date

  // N:1 con Inventario
  @ManyToOne(() => Inventario, inventario => inventario.categoriasProducto, { primary: true })
  @JoinColumn({ name: "idProducto" })
  inventario: Inventario

  // N:1 con Categoria
  @ManyToOne(() => Categoria, categoria => categoria.categoriasProducto, { primary: true })
  @JoinColumn({ name: "idCategoria" })
  categoria: Categoria
}