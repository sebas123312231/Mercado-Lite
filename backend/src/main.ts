import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

async function bootstrap() {
  try {
    await AppDataSource.initialize()
    console.log('✅ Database conectada')
  } catch (error) {
      console.error('❌ Error:', error)
  }

  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();