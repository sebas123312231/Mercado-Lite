import { Body, Injectable } from "@nestjs/common";
import { AppDataSource } from "../data-source";
import { User } from "src/entity/user.entity";
import { Carrito } from "src/entity/carrito.entity";


@Injectable() 
export class UserService {
    
    async createUser(user: User) {
        // 1. Crear un carrito vacío para el usuario
        const carrito = await AppDataSource.manager.save(Carrito, { total: 0 });
    
        // 2. Asignar el carrito al usuario
        user.carrito = carrito;
        user.carritoId = carrito.id;
    
        // 3. Guardar el usuario CON el carrito
        return await AppDataSource.manager.save(User, user);
    }

    async getAllUsers() {
        return await AppDataSource.manager.find(User, {
            relations: ['carrito']  // ← Cargar la relación
        });
    }

    async getUserByCi(ci: string) {
        const ciNumber = parseInt(ci, 10);
        if (isNaN(ciNumber)) {
            throw new Error(`CI debe ser un número válido, recibiste: ${ci}`);
        }
        return await AppDataSource.manager.findOne(User, {
            where: { ci: parseInt(ci) },
            relations: ['carrito']  // ← Cargar la relación
        });
    }

    async deleteUser(ci: string) {
        const user = await AppDataSource.manager.findOneBy(User, { 
            ci: parseInt(ci) 
        });
        if (!user) {
            throw new Error(`User con CI ${ci} no encontrado`);
        }
        if (user.carritoId) {
            await AppDataSource.manager.delete(Carrito, {
                id: user.carritoId
            });
        }
        return await AppDataSource.manager.delete(User, { ci: parseInt(ci) });
    }

    async updateUser(ci: string, user: User) {
        // Importante: NO actualizar carritoId aquí
        const { carritoId, ...updateData } = user;  // Excluir carritoId
        return await AppDataSource.manager.update(User, 
            { ci: parseInt(ci) }, 
            updateData
        );
    }
}