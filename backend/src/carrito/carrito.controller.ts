import { Controller, Get, Param, Put, Body, Post } from "@nestjs/common";
import { CarritoService } from "./carrito.service";

@Controller('/carrito')
export class CarritoController {
    constructor(private readonly carritoService: CarritoService) {}
 
    @Get()
    obtenerTodosLosCarritos() {
        return this.carritoService.obtenerTodosLosCarritos();
    }

    /**
     * GET /carrito/:id
     * Obtener UN carrito específico por su ID
     * Ejemplo: GET /carrito/1
     */
    @Get('/:id')
    obtenerCarritoPorId(@Param('id') id: string) {
        return this.carritoService.obtenerCarrito(id);
    }

    /**
     * GET /carrito/user/:ci
     * Obtener el carrito de un usuario por su CI
     * Ejemplo: GET /carrito/user/123456
     */
    @Get('/user/:ci')
    obtenerCarritoPorUserCi(@Param('ci') ci: string) {
        return this.carritoService.obtenerCarritoPorUserCi(ci);
    }

    // ==================== PUT ENDPOINTS ====================

    /**
     * PUT /carrito/:id
     * Actualizar el total del carrito (establecer un valor específico)
     * Body: { "nuevoTotal": 150.50 }
     * Ejemplo: PUT /carrito/1 con body { "nuevoTotal": 100 }
     */
    @Put('/:id')
    actualizarTotal(
        @Param('id') id: string,
        @Body('nuevoTotal') nuevoTotal: string
    ) {
        return this.carritoService.actualizarTotal(id, nuevoTotal);
    }

    /**
     * PUT /carrito/:id/agregar
     * Agregar un monto al carrito (sumar)
     * Body: { "monto": 50.25 }
     * Ejemplo: PUT /carrito/1/agregar con body { "monto": 50 }
     */
    @Put('/:id/agregar')
    agregarAlCarrito(
        @Param('id') id: string,
        @Body('monto') monto: string
    ) {
        return this.carritoService.agregarAlCarrito(id, monto);
    }

    /**
     * PUT /carrito/:id/quitar
     * Quitar un monto del carrito (restar)
     * Body: { "monto": 30.75 }
     * Ejemplo: PUT /carrito/1/quitar con body { "monto": 30 }
     */
    @Put('/:id/quitar')
    quitarDelCarrito(
        @Param('id') id: string,
        @Body('monto') monto: string
    ) {
        return this.carritoService.quitarDelCarrito(id, monto);
    }

    /**
     * PUT /carrito/:id/limpiar
     * Vaciar el carrito (total = 0)
     * Ejemplo: PUT /carrito/1/limpiar
     */
    @Put('/:id/limpiar')
    limpiarCarrito(@Param('id') id: string) {
        return this.carritoService.limpiarCarrito(id);
    }
}