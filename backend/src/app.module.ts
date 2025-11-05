// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './dbentity/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Como MySQL está en el mismo WSL/Ubuntu
      port: 3306, // El puerto por defecto de MySQL
      username: 'root', // O el usuario que hayas creado
      password: 'Helmozulo123', // <--- ¡Cámbiala!
      database: 'mercado_lite_db', // El nombre de la base de datos que creaste
      
      // *Importante para la parte 3:
      entities: [__dirname + '/**/*.entity{.ts,.js}'], 
      
      // *Sólo para desarrollo:
      synchronize: true, // Esto crea las tablas automáticamente. ¡Desactivar en producción!
    }),
    ProductModule,
    // Aquí irán tus módulos como ProductsModule, UsersModule, etc.
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}