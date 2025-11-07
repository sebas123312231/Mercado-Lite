import { Column, Entity, PrimaryColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Proveedor } from "./proveedor.entity" // Importación corregida
import { Descuento } from "./descuento.entity" // Importación corregida
import { Lote } from "./lote.entity" // Importación corregida
import { CategoriaProducto } from "./categoriaproducto.entity" // Importación corregida

@Entity('Inventario')
export class Inventario { 
  
  @PrimaryColumn()
  idProducto: number 

  @Column()
  nombre: string

  @Column({ nullable: true })
  descripcion: string

  @Column({ type: "decimal" })
  precioVenta: number
  
  @Column()
  stockActual: number
  
  @Column()
  stockMinimo: number

  // Claves Foráneas
  @Column()
  idProveedor: number 

  @Column({ nullable: true })
  idDescuento: number 

 

  // N:1 con Proveedor
  @ManyToOne(() => Proveedor, proveedor => proveedor.inventarios)
  @JoinColumn({ name: "idProveedor" })
  proveedor: Proveedor

  // N:1 con Descuento
  @ManyToOne(() => Descuento, descuento => descuento.inventarios)
  @JoinColumn({ name: "idDescuento" })
  descuento: Descuento

  // 1:N con Lote
  @OneToMany(() => Lote, lote => lote.inventario)
  lotes: Lote[]
  
  // 1:N con CategoriaProducto
  @OneToMany(() => CategoriaProducto, cp => cp.inventario)
  categoriasProducto: CategoriaProducto[]
}