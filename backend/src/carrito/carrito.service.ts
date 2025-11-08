// src/carrito/carrito.service.ts
import { Injectable } from "@nestjs/common";
import { AppDataSource } from "../data-source";
import { Carrito } from "src/entity/carrito.entity";
import { User } from "src/entity/user.entity";

@Injectable()
export class CarritoService {
    
    // Obtener UN carrito por su ID (CON el user relacionado)
    async obtenerCarrito(carritoId: string) {
        const id = parseInt(carritoId, 10);
        if (isNaN(id)) {
            throw new Error(`ID debe ser un número válido, recibiste: ${carritoId}`);
        }
        return await AppDataSource.manager.findOne(Carrito, {
            where: { id: id },
            relations: ['user']  // ← Cargar el user relacionado
        });
    }

    // Obtener todos los carritos (CON sus users)
    async obtenerTodosLosCarritos() {
        return await AppDataSource.manager.find(Carrito, {
            relations: ['user']
        });
    }

    // Obtener carrito por el CI del usuario
    async obtenerCarritoPorUserCi(ci: string) {
        const ciint = parseInt(ci, 10);
        if (isNaN(ciint)) {
            throw new Error(`CI debe ser un número válido, recibiste: ${ci}`);
        }
        const user = await AppDataSource.manager.findOne(User, {
            where: { ci : ciint },
            relations: ['carrito']  // ← Obtiene el user CON su carrito
        });
        
        if (!user) {
            return null;  // User no existe
        }
        
        return user.carrito;  // Devuelve el carrito del user
    }

    // Actualizar el total del carrito
    async actualizarTotal(carritoId: string, nuevoTotal: string) {
        const id = parseInt(carritoId);
        if(isNaN(id)){
            throw new Error(`Id debe ser un número válido, recibiste: ${carritoId}`);
        }
        const nuevototal = parseInt(nuevoTotal);
        if(isNaN(nuevototal)){
            throw new Error(`Total debe ser un número válido, recibiste: ${nuevoTotal}`);
        }
        return await AppDataSource.manager.update(Carrito, 
            { id: id },
            { total: nuevototal }
        );
    }

    // Vaciar el carrito (total a 0)
    async limpiarCarrito(carritoId: string) {
        const id = parseInt(carritoId);
        if(isNaN(id)){
            throw new Error(`Id debe ser un número válido, recibiste: ${carritoId}`);
        }
        return await AppDataSource.manager.update(Carrito,
            { id: id },
            { total: 0 }
        );
    }

    // Incrementar el total (agregar item)
    async agregarAlCarrito(carritoId: string, Monto: string) {
        const id = parseInt(carritoId);
        if(isNaN(id)){
            throw new Error(`Id debe ser un número válido, recibiste: ${carritoId}`);
        }
        const monto = parseInt(Monto);
        if(isNaN(monto)){
            throw new Error(`Total debe ser un número válido, recibiste: ${Monto}`);
        }
        // 1. Obtener el carrito actual
        const carrito = await this.obtenerCarrito(carritoId);
        
        if (!carrito) {
            return null;  // Carrito no existe
        }
        
        // 2. Calcular nuevo total
        const nuevoTotal = carrito.total + monto;
        
        // 3. Actualizar
        return await this.actualizarTotal(carritoId, Monto);
    }

    // Decrementar el total (quitar item)
    async quitarDelCarrito(carritoId: string, Monto: string) {
        const id = parseInt(carritoId);
        if(isNaN(id)){
            throw new Error(`Id debe ser un número válido, recibiste: ${carritoId}`);
        }
        const monto = parseInt(Monto);
        if(isNaN(monto)){
            throw new Error(`Total debe ser un número válido, recibiste: ${Monto}`);
        }
        // 1. Obtener el carrito actual
        const carrito = await this.obtenerCarrito(carritoId);
        
        if (!carrito) {
            return null;
        }
        
        // 2. Calcular nuevo total (evitar negativo)
        const nuevoTotal = Math.max(0, carrito.total - monto);
        
        // 3. Actualizar
        return await this.actualizarTotal(carritoId, Monto);
    }
}
