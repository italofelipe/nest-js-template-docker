import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('PORTA NEST', process.env.NEST_PORT);
  await app
    .listen(process.env.NEST_PORT)
    .then(() => console.log('App listening on port', process.env.NEST_PORT))
    .catch((err) => console.log('Theres an error', err));
}
bootstrap();
