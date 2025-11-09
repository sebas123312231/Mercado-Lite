import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { CategoriaProducto } from "./categoriaproducto.entity" 

@Entity('Categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  idCategoria: number

  @Column()
  nombre: string
  
  @Column({ nullable: true })
  descripcion: string

  @Column({ default: true })
  estaActiva: boolean 

  // 1:N con CategoriaProducto
  @OneToMany(() => CategoriaProducto, categoriaProducto => categoriaProducto.categoria)
  categoriasProducto: CategoriaProducto[]
}