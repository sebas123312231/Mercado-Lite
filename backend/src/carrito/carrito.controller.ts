import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Carrito } from "../entity/carrito.entity";
import { CarritoService } from "./carrito.service";


@Controller('/Carrito')
export class CarritoController {

    constructor(private readonly carritoService: CarritoService) {}

    @Post()
    createCarrito(@Body() carrito: Carrito) {
        return this.carritoService.createCarrito(carrito);
    }

    @Get()
    getAllCarrito() {
        return this.carritoService.getAllCarritos();
    }

    @Get('/:ci') 
    getCarritoByCi(@Param() params: any) {
        return this.carritoService.getCarritoByCi(params.ci);
    }

    @Delete('/:ci')
    deleteCarrito(@Param() params: any) {
        return this.carritoService.deleteCarrito(params.ci);
    }

    @Put('/:ci')
    updateCarrito(@Param() params: any,  @Body() carrito: Carrito) {
        return this.carritoService.updateCarrito(params.ci, carrito);
    }

}