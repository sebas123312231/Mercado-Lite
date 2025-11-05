// src/product/product.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) // Inyecta el repositorio de Product
    private productsRepository: Repository<Product>,
  ) {}

  // Ejemplo: método para crear un nuevo producto
  async createProduct(productData: Partial<Product>): Promise<Product> {
    const newProduct = this.productsRepository.create(productData);
    return this.productsRepository.save(newProduct);
  }

  // Ejemplo: método para obtener todos los productos
  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
}