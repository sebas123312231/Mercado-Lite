// src/product/product.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Esto indica que la clase es una tabla en la DB
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}