import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Proveedor } from "./proveedor.entity"
import { Descuento } from "./descuento.entity"
import { Lote } from "./lote.entity"
import { CategoriaProducto } from "./categoriaproducto.entity"
import { CarritoInventario } from "./carritoinventario.entity"

@Entity('Inventario')
export class Inventario { 
  
  @PrimaryGeneratedColumn()
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

  @OneToMany(() => CarritoInventario, carritoInventario => carritoInventario.inventario)
  carritoInventarios: CarritoInventario[];
}