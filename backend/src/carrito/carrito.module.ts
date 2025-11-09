import { Module } from "@nestjs/common";
import { CarritoService } from "./carrito.service";
import { CarritoController } from "../carrito/carrito.controller";


@Module({
    imports: [],
    controllers: [CarritoController],
    providers: [CarritoService],
})
export class CarritoModule {}   