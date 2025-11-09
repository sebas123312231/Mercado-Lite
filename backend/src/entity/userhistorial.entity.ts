import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm"
import { User } from "./user.entity"
import { Historial } from "./historial.entity"

@Entity()
export class UserHistorial {
    @PrimaryColumn()
    userCi: number
  
    @ManyToOne(() => User, user => user.userHistorials)
    @JoinColumn({ name: 'userCi' })
    user: User
        
    // Clave foránea a Historial (parte de la PK compuesta)
    @PrimaryColumn()
    historialId: number
  
    @ManyToOne(() => Historial, historial => historial.userHistorials)
    @JoinColumn({ name: 'historialId' })
    historial: Historial
}