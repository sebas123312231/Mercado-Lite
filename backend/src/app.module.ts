import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarritoModule } from "./carrito/carrito.module"; 

@Module({
  imports: [UserModule, CarritoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}