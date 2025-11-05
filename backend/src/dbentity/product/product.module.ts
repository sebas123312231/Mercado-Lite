// src/product/product.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity'; // Importa la entidad

@Module({
  imports: [TypeOrmModule.forFeature([Product])], // Registra la entidad aquí
})
export class ProductModule {}